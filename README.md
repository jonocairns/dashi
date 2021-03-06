# A simple react dashboard for a home server

![https://i.imgur.com/nmzKek2.png](https://i.imgur.com/nmzKek2.png)

1. yarn install
2. yarn start
3. Add to cards.js any of the links you wish to use. Check localhost:3000 for preview
4. If you're using a sub directory, add this to package.json `"homepage" : "http://domain.com/subdir"` before you run build
4. yarn run build
5. copy the contents of the build dir to web server `/config/www/dashi` for UNRAID docker letsencrypt

example nginx configuration

```
server {
	listen 443 ssl http2 default_server;
	server_name domain.com;

	location = / {
		return 301 $scheme://domain.com/dashboard;
	}

	# ...other locations here

	location /dashboard {
		# assumes you store the build output in a directory here
		alias  /config/www/site;
		try_files $uri /index.html =404;
	}

	location /static {
		alias  /config/www/site/static;
		try_files $uri =404;
	}
}
```
