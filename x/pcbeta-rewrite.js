
var url = $request.url;
var body = $response.body;

if (url.indexOf('mod=forumdisplay') > 0) {
	body = body.replace('加载更多', '下一页').replace('</html>', '<script>jQuery(".loadmore").unbind();</script></html>')
} else if (url.indexOf('mod') < 0) {
	body = body.replace(/forum.php\?mod=forumdisplay&(amp;)?fid=(\d+)&mobile=yes/g, 'forum.php?mod=forumdisplay&fid=$2&filter=author&orderby=dateline&mobile=yes')
}

$done(body);
