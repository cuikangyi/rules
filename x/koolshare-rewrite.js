
var url = $request.url;
var body = $response.body;

if (url.indexOf('mod') < 0) {
	body = body.replace(/forum.php\?mod=forumdisplay&(amp;)?fid=(\d+)&(amp;)?mobile=1/g, 'forum.php?mod=forumdisplay&fid=$2&filter=author&orderby=dateline&mobile=1')
}

//body = body.replace('fm.src', 'fm.src="";//');

$done(body);
