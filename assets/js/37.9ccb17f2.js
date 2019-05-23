(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{277:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(6),i=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"directus-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Directus Requirements")]),e._v(" "),a("h2",{attrs:{id:"http-web-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-web-server","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP Web Server")]),e._v(" "),a("p",[e._v("Directus has been developed and tested on "),a("router-link",{attrs:{to:"/advanced/server-setup.html#apache"}},[e._v("Apache 2")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Alternate Web Servers")]),e._v(" "),a("p",[e._v("In theory, Directus should work on any HTTP Server, including "),a("router-link",{attrs:{to:"/advanced/server-setup.html#nginx"}},[e._v("NGINX")]),e._v(" and "),a("router-link",{attrs:{to:"/advanced/server-setup.html#caddy"}},[e._v("Caddy")]),e._v(". However these are not officially supported so you should proceed at your own risk.")],1)]),e._v(" "),a("h3",{attrs:{id:"routing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing","aria-hidden":"true"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),a("p",[e._v("The Directus API requires URL rewriting for routing requests. On Apache this means having "),a("code",[e._v("mod_rewrite")]),e._v(" enabled for "),a("code",[e._v(".htaccess")]),e._v(" files.")]),e._v(" "),a("h3",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),a("ol",[a("li",[e._v("The root directory for Directus API should be "),a("code",[e._v("public")]),e._v(" directory.")]),e._v(" "),a("li",[e._v("Make sure the directory ownership is set to user the web server is running under. Usually the user is "),a("code",[e._v("www-data")]),e._v(" "),a("ul",[a("li",[e._v("eg: "),a("code",[e._v("sudo chown -R www-data:www-data /var/www/api")])])])]),e._v(" "),a("li",[e._v("The following files/folders should have write permission:\n"),a("ul",[a("li",[a("code",[e._v("/logs")])]),e._v(" "),a("li",[a("code",[e._v("/public/uploads")]),e._v(" (or your configured upload directory)")])])])]),e._v(" "),a("h2",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql","aria-hidden":"true"}},[e._v("#")]),e._v(" SQL")]),e._v(" "),a("p",[e._v("Directus has been developed and tested on MySQL and requires version 5.7+.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Alternate SQL Vendors")]),e._v(" "),a("p",[e._v("In theory, Directus should work with MySQL drop-in alternatives such as MariaDB or Percona Server. However these are not officially supported so you should proceed at your own risk.")])]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("To install Directus you will first need a database and a database-user with access to it. You can create a blank database, or install Directus on an existing database that already has a schema and content.")]),e._v(" "),a("p",[e._v("Directus can manage your database's schema, this requires the user to have privileges to create, alter and drop tables in your database. Also the user must have the privilege to insert, update and delete items in the database.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/guides/database.html#creating-a-database"}},[e._v("Learn more about creating a database")])],1),e._v(" "),a("h2",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),a("p",[e._v("Directus requires PHP 7.1+, though we recommend using the most recent/stable version possible.")]),e._v(" "),a("h2",{attrs:{id:"php-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP Extensions")]),e._v(" "),a("p",[e._v("While most of these PHP extensions are typically included by default, you should confirm that all are installed by checking the "),a("code",[e._v("php.ini")]),e._v(" of your php ("),a("em",[e._v("not CLI")]),e._v(") installation, or using "),a("code",[e._v("phpinfo()")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("pdo")]),e._v(" + "),a("code",[e._v("mysql")]),e._v(" – PHP Data Objects (PDO) enables safer "),a("em",[e._v("parameterized")]),e._v(" queries")]),e._v(" "),a("li",[a("code",[e._v("curl")]),e._v(" – cURL fetches metadata (eg: title and thumbnail) from embed services like YouTube and Vimeo")]),e._v(" "),a("li",[a("code",[e._v("gd")]),e._v(" – GD allows the "),a("a",{attrs:{href:"https://github.com/directus/directus-thumbnailer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thumbnailer"),a("OutboundLink")],1),e._v(" to generate images. To add thumbnail support for SVG, PDF, PSD and TIF/TIFF you must also install the "),a("code",[e._v("imagick")]),e._v(" extension.")]),e._v(" "),a("li",[a("code",[e._v("fileinfo")]),e._v(" – Fetches metadata (eg: charset and file-type) and "),a("a",{attrs:{href:"https://iptc.org/standards/photo-metadata/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPTC Info"),a("OutboundLink")],1),e._v(" (eg: location and keywords) for uploaded images.")]),e._v(" "),a("li",[a("code",[e._v("mbstring")]),e._v(" – The multibyte string functions helps php to work multibyte encoding. These functions are used by Directus to get the correct string's length or a correct comparison with another string.")]),e._v(" "),a("li",[a("code",[e._v("xml")]),e._v(" - Used by PHPUnit (Only required if you are installing PHPUnit)")])])])},[],!1,null,null,null);i.options.__file="requirements.md";t.default=i.exports}}]);