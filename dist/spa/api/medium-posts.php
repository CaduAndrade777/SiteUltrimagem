<?php
header('Content-Type: application/json; charset=utf-8');

$feedUrl   = 'https://medium.com/feed/@ultrimagemuba';
$cacheFile = sys_get_temp_dir() . '/ultrimagem-medium-posts.json';
$cacheTtl  = 1800; 
// Usa o cache se ainda estiver válido
if (is_file($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTtl) {
    readfile($cacheFile);
    exit;
}

function baixarFeed($url) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; UltrimagemBlog/1.0)',
    ]);
    $body = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return ($body !== false && $code === 200) ? $body : null;
}

function responderErro() {
    http_response_code(502);
    echo json_encode(['status' => 'error', 'items' => []]);
    exit;
}

$xmlString = baixarFeed($feedUrl);

if ($xmlString === null) {
    // Se o Medium falhar, devolve o cache antigo (se existir)
    if (is_file($cacheFile)) {
        readfile($cacheFile);
        exit;
    }
    responderErro();
}

libxml_use_internal_errors(true);
$xml = simplexml_load_string($xmlString);

if ($xml === false || !isset($xml->channel->item)) {
    responderErro();
}

$items = [];

foreach ($xml->channel->item as $item) {
    $html = (string) $item->children('content', true)->encoded;

    // Primeira imagem do artigo (ignora o pixel de rastreio do Medium)
    $thumbnail = '';
    if (preg_match_all('/<img[^>]+src="([^"]+)"/i', $html, $matches)) {
        foreach ($matches[1] as $src) {
            if (strpos($src, '/_/stat') === false) {
                $thumbnail = $src;
                break;
            }
        }
    }

    // Texto resumido, sem HTML
    $texto = preg_replace('/<h3.*?<\/h3>/is', '', $html);
    $texto = trim(preg_replace('/\s+/', ' ', html_entity_decode(strip_tags($texto), ENT_QUOTES, 'UTF-8')));
    if (mb_strlen($texto) > 220) {
        $texto = mb_substr($texto, 0, 220) . '...';
    }

    $items[] = [
        'guid'        => (string) $item->guid,
        'title'       => (string) $item->title,
        'link'        => strtok((string) $item->link, '?'),
        'pubDate'     => (string) $item->pubDate,
        'thumbnail'   => $thumbnail,
        'description' => $texto,
    ];
}

$json = json_encode(['status' => 'ok', 'items' => $items], JSON_UNESCAPED_UNICODE);
file_put_contents($cacheFile, $json);
echo $json;