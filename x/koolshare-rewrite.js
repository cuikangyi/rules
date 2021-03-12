
var body = $response.body;

body = body.replace(/forum.php\?mod=forumdisplay&(amp;)?fid=(\d+)&(amp;)?mobile=1/g, 'forum.php?mod=forumdisplay&fid=$2&filter=author&orderby=dateline&mobile=1')

$done(body);
