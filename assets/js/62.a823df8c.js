(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{223:function(t,e,a){"use strict";a.r(e);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(6),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[t._v("#")]),t._v(" Database")]),t._v(" "),a("blockquote",[a("p",[t._v("The Database is the container for your entire Directus project. It is kind of like a very powerful spreadsheet.")])]),t._v(" "),a("h2",{attrs:{id:"database-mirroring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-mirroring","aria-hidden":"true"}},[t._v("#")]),t._v(" Database Mirroring")]),t._v(" "),a("h3",{attrs:{id:"what-is-a-relational-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-relational-database","aria-hidden":"true"}},[t._v("#")]),t._v(" What is a relational database?")]),t._v(" "),a("p",[t._v("Directus has been built to support the most common type of relational database: SQL (Structured Query Language). If you're confused by \"relational\", it just means that you can add an item in the database once, and then relate it to many other items. For example, you could relate a single author to all of their books instead of typing the same author's name into each of their books.")]),t._v(" "),a("h3",{attrs:{id:"how-directus-works-with-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-directus-works-with-databases","aria-hidden":"true"}},[t._v("#")]),t._v(" How Directus works with databases")]),t._v(" "),a("p",[t._v("One of the most unique concepts of Directus is that it aims to be a pure SQL database wrapper. When you create Directus collections, fields, defaults, datatypes... you are actually just creating tables, columns, etc in a custom SQL database. That means you do not need to shoe-horn your project architecture into a predefined CMS schema. "),a("strong",[t._v("You are in total control of your data, including how it's organized, stored, and optimized.")])]),t._v(" "),a("p",[t._v('More importantly, all the Directus "stuff" such as settings, revisions, preferences, permissions, comments, etc... are all stored in completely separarate tables from your content. This decoupled approach means that you can easily install Directus on top of an existing SQL database to get started. Or, if you ever want to take your data elsewhere, just delete those Directus system tables and your content remains in a pristine SQL database with no hint that Directus was ever there. '),a("strong",[t._v("You data is always completely pure and portable so you can come and go from Directus at will.")])]),t._v(" "),a("h3",{attrs:{id:"database-vs-directus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-vs-directus","aria-hidden":"true"}},[t._v("#")]),t._v(" Database vs Directus")]),t._v(" "),a("p",[t._v("There are many advantages to wrapping your database with Directus, below we outline several of the most notable:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Presentation")]),t._v("\nEngineers love that databases are essentially a grid of raw data. What you see is what you get. But a thin veil of aesthetics never hurt any one... in fact it makes managing data a lot easier in certain cases as we'll see below.")]),t._v(" "),a("li",[a("strong",[t._v("Relational Data")]),t._v("\nWorking with primary keys is time consuming and it's easy to forget what you're looking at when you're nested 3-4 levels deep. Directus handles all those native relationships, but gives you context about each item you're working on. So you'll see "),a("code",[t._v("John Smith – NYC Office (Accounting)")]),t._v(" instead of "),a("code",[t._v("64009")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("Managing Assets")]),t._v("\nSure, you can store BLOBs of file data directly in the database, but you typically don't even get a thumbnail preview... just code. And it takes a script/app to get files there in the first place. Directus lets you see all of your files, manage assets in the filesystem, or even save them to the cloud service of your choice. It also has helpful tools for cropping and resizing.")]),t._v(" "),a("li",[a("strong",[t._v("Safety")]),t._v("\nIt's way too easy to irreversibly damage a raw database. Have you ever accidentally edited a column and lost data? Truncated a table with millions of records? Deleted a whole database? No one should endure the stressful moments of trying to figure out how recent your latest backup is. Directus keeps all item updates (full and delta), lets you hide dangerous features based on the user's proficiency, and gives appropriate warnings for attempted actions. For example, if you want to delete a collection, you'll need to first confirm your intentions by typing the collection name in.")]),t._v(" "),a("li",[a("strong",[t._v("Accountability")]),t._v("\nA database is an excellent single-source-of-truth, but it doesn't track edits and store all deltas for a comprehensive revision history. For all updates, Directus knows what was changed, when, and by who — so you have a full history from creation to publish.")]),t._v(" "),a("li",[a("strong",[t._v("Permissions")]),t._v("\nDatabase users have decent CRUD permissions, but lack the granularity of a full-featured system. For example: column read blacklist based on the record's status and the when created by other users within the permission's role. Complex? Yes. But very powerful.")]),t._v(" "),a("li",[a("strong",[t._v("Accessibility")]),t._v("\nDirectus adds a comprehensive API wrapper to your database that is dynamically based on your custom schema. It also includes many SDKs for specific languages so you can get connected to your data even faster. Oh, and of course you can always connect to the database directly and completely bypass Directus. That's near impossible with other CMS because of the proprietary and complex way that they store your data.")])]),t._v(" "),a("h2",{attrs:{id:"creating-a-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a Database")]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("p",[t._v("Connect to MySQL:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ mysql -h <host> -u <user> -p\n")])])]),a("p",[t._v("The command above will ask you for the user password:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ mysql -h localhost -u root -p\nEnter password: ****\n")])])]),a("p",[t._v("After you successfully log into MySQL, run the "),a("code",[t._v("CREATE DATABASE")]),t._v(" command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> CREATE DATABASE directus;\nQuery OK, 1 row affected (0.00 sec)\n")])])]),a("h2",{attrs:{id:"directus-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-schema","aria-hidden":"true"}},[t._v("#")]),t._v(" Directus Schema")]),t._v(" "),a("p",[t._v("This document provides an explanation of all tables and fields within the Directus schema boilerplate.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("directus_activity")])]),t._v(" "),a("td",[t._v("Log of all actions (eg: item updates) performed through the API (or App)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_activity_read")])]),t._v(" "),a("td",[t._v("Tracks if a user has seen an Activity/Message item")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_collection_presets")])]),t._v(" "),a("td",[t._v("User's collection preferences and bookmarks for Item Listing page")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_collections")])]),t._v(" "),a("td",[t._v("Information for database tables (collections) managed by Directus")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_fields")])]),t._v(" "),a("td",[t._v("Information for database columns (fields) and their interfaces")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_files")])]),t._v(" "),a("td",[t._v("Metadata for all files and embeds added to Directus")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_folders")])]),t._v(" "),a("td",[t._v("Nestable virtual directories used to organize Directus files")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_migrations")])]),t._v(" "),a("td",[t._v("Database schema changes for upgrades/downgrades created by Phinx")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_permissions")])]),t._v(" "),a("td",[t._v("Defines specific API access rules for a specific Role")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_relations")])]),t._v(" "),a("td",[t._v("Keys and junctions for field-level relationships between collections")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_revisions")])]),t._v(" "),a("td",[t._v("The delta and full data snapshot for all item Activity (eg: updates)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_roles")])]),t._v(" "),a("td",[t._v("Listing of user roles that group together sets of permissions")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_settings")])]),t._v(" "),a("td",[t._v("Ad-hoc key-value-pairs for storing Global and Extension settings")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_user_roles")])]),t._v(" "),a("td",[t._v("Junction table allowing users to possess multiple roles")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directus_users")])]),t._v(" "),a("td",[t._v("Directory of all App and API Users")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-activity","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_activity")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("action")]),t._v(" "),a("td",[t._v("What performed (authentication, create, update, delete, comment, etc)")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("Who performed (Foreign Key: directus_users)")])]),t._v(" "),a("tr",[a("td",[t._v("datetime")]),t._v(" "),a("td",[t._v("When performed")])]),t._v(" "),a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("IP of who performed")])]),t._v(" "),a("tr",[a("td",[t._v("user_agent")]),t._v(" "),a("td",[t._v("User Agent of who performed")])]),t._v(" "),a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Collection affected")])]),t._v(" "),a("tr",[a("td",[t._v("item")]),t._v(" "),a("td",[t._v("Item affected")])]),t._v(" "),a("tr",[a("td",[t._v("comment")]),t._v(" "),a("td",[t._v("Explanation left by who performed")])]),t._v(" "),a("tr",[a("td",[t._v("datetime_edited")]),t._v(" "),a("td",[t._v("Comment last edited datetime")])]),t._v(" "),a("tr",[a("td",[t._v("deleted_comment")]),t._v(" "),a("td",[t._v("Whether the comment was deleted or not")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-activity-seen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-activity-seen","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_activity_seen")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("activity")]),t._v(" "),a("td",[t._v("Referenced activity (Foreign Key: directus_activity)")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("User who saw (Foreign Key: directus_users)")])]),t._v(" "),a("tr",[a("td",[t._v("seen")]),t._v(" "),a("td",[t._v("If the user has seen this item")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-collection-presets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-collection-presets","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_collection_presets")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Title of bookmark, NULL values define default preset")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("Assigned user, NULL for global (Foreign Key: directus_users)")])]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("Assigned role, NULL for global (Foreign Key: directus_roles)")])]),t._v(" "),a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Which collection this is for")])]),t._v(" "),a("tr",[a("td",[t._v("search_query")]),t._v(" "),a("td",[t._v("Search query string to filter on")])]),t._v(" "),a("tr",[a("td",[t._v("filters")]),t._v(" "),a("td",[t._v("JSON of filter options to apply")])]),t._v(" "),a("tr",[a("td",[t._v("view_type")]),t._v(" "),a("td",[t._v("Listing view type (eg: tabular)")])]),t._v(" "),a("tr",[a("td",[t._v("view_query")]),t._v(" "),a("td",[t._v("JSON of all query parameters (eg: sorting)")])]),t._v(" "),a("tr",[a("td",[t._v("view_options")]),t._v(" "),a("td",[t._v("JSON of view options used")])]),t._v(" "),a("tr",[a("td",[t._v("translation")]),t._v(" "),a("td",[t._v("JSON field of optional user translations for additional names of the field")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-collections","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_collections")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Primary Key. Name of collection to manage, must match database table")])]),t._v(" "),a("tr",[a("td",[t._v("managed")]),t._v(" "),a("td",[t._v("If the table is managed by Directus. Otherwise it is ignored.")])]),t._v(" "),a("tr",[a("td",[t._v("item_name_template")]),t._v(" "),a("td",[t._v("A Mustache template that defines how items are labeled")])]),t._v(" "),a("tr",[a("td",[t._v("preview_url")]),t._v(" "),a("td",[t._v("URL using Twig templating for previewing items in this collection")])]),t._v(" "),a("tr",[a("td",[t._v("hidden")]),t._v(" "),a("td",[t._v("If this collection is globally hidden")])]),t._v(" "),a("tr",[a("td",[t._v("single")]),t._v(" "),a("td",[t._v("If this collection will only ever have one item")])]),t._v(" "),a("tr",[a("td",[t._v("translation")]),t._v(" "),a("td",[t._v("JSON of translations")])]),t._v(" "),a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[t._v("A description of this collection")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("Material Design icon name for the collection")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_fields")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Name of parent Collection (Foreign Key: directus_collections)")])]),t._v(" "),a("tr",[a("td",[t._v("field")]),t._v(" "),a("td",[t._v("Name of field, typically a database column name")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("Directus datatype, an extended set of SQL datatypes")])]),t._v(" "),a("tr",[a("td",[t._v("interface")]),t._v(" "),a("td",[t._v("Interface id")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("JSON of interface option values")])]),t._v(" "),a("tr",[a("td",[t._v("locked")]),t._v(" "),a("td",[t._v("If this field is locked from editing, typically system fields")])]),t._v(" "),a("tr",[a("td",[t._v("translation")]),t._v(" "),a("td",[t._v("JSON of translations")])]),t._v(" "),a("tr",[a("td",[t._v("validation")]),t._v(" "),a("td",[t._v("A PCRE RegEx pattern to validate the input against. Must include delimiters")])]),t._v(" "),a("tr",[a("td",[t._v("readonly")]),t._v(" "),a("td",[t._v("If the field is globally read-only")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),t._v(" "),a("td",[t._v("If the field is required")])]),t._v(" "),a("tr",[a("td",[t._v("hidden_input")]),t._v(" "),a("td",[t._v("If the field is hidden globally on the Item Detail page")])]),t._v(" "),a("tr",[a("td",[t._v("hidden_list")]),t._v(" "),a("td",[t._v("If the field is hidden globally on the Item Listing page")])]),t._v(" "),a("tr",[a("td",[t._v("sort")]),t._v(" "),a("td",[t._v("Used to order the fields on the item detail page")])]),t._v(" "),a("tr",[a("td",[t._v("view_width")]),t._v(" "),a("td",[t._v("Width of field, makes masonry layouts possible ("),a("code",[t._v("1")]),t._v(", "),a("code",[t._v("2")]),t._v(", "),a("code",[t._v("3")]),t._v(", or "),a("code",[t._v("4")]),t._v(")")])]),t._v(" "),a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[t._v("A helpful note for users")])]),t._v(" "),a("tr",[a("td",[t._v("group")]),t._v(" "),a("td",[t._v("Used for grouping fields (Foreign Key: directus_fields)")])])])]),t._v(" "),a("p",[t._v("Read more about the validation "),a("a",{attrs:{href:"http://php.net/manual/en/pcre.pattern.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PCRE patterns"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://php.net/manual/en/regexp.reference.delimiters.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("delimiters"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"directus-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-files","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_files")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("filename")]),t._v(" "),a("td",[t._v("The asset's filesystem name")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("A label for the asset")])]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("A description of the asset")])]),t._v(" "),a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("Where the image was taken")])]),t._v(" "),a("tr",[a("td",[t._v("tags")]),t._v(" "),a("td",[t._v("Keywords to assist in searching")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("The width in pixels (images only)")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("The height in pixels (images only)")])]),t._v(" "),a("tr",[a("td",[t._v("filesize")]),t._v(" "),a("td",[t._v("The size of the file in bytes")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("Length in seconds (videos and embeds only)")])]),t._v(" "),a("tr",[a("td",[t._v("metadata")]),t._v(" "),a("td",[t._v("JSON of additional metadata")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("MIME type of the file")])]),t._v(" "),a("tr",[a("td",[t._v("charset")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("embed")]),t._v(" "),a("td",[t._v("Remote ID for external assets")])]),t._v(" "),a("tr",[a("td",[t._v("folder")]),t._v(" "),a("td",[t._v("Name of parent Folder (Foreign Key: directus_folders)")])]),t._v(" "),a("tr",[a("td",[t._v("upload_user")]),t._v(" "),a("td",[t._v("User who uploaded the file")])]),t._v(" "),a("tr",[a("td",[t._v("upload_date")]),t._v(" "),a("td",[t._v("When the file was uploaded")])]),t._v(" "),a("tr",[a("td",[t._v("storage_adapter")]),t._v(" "),a("td",[t._v("Which storage adapter was used to store the file")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-folders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-folders","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_folders")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("Name of the folder")])]),t._v(" "),a("tr",[a("td",[t._v("parent_folder")]),t._v(" "),a("td",[t._v("Name of parent Folder (Foreign Key: directus_folders)")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-migrations","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_migrations")])]),t._v(" "),a("p",[t._v("Phinx migrations table, record all migrations executed.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("Migration version")])]),t._v(" "),a("tr",[a("td",[t._v("migration_name")]),t._v(" "),a("td",[t._v("Migration name")])]),t._v(" "),a("tr",[a("td",[t._v("start_time")]),t._v(" "),a("td",[t._v("Migration start datetime")])]),t._v(" "),a("tr",[a("td",[t._v("end_time")]),t._v(" "),a("td",[t._v("Migration end datetime")])]),t._v(" "),a("tr",[a("td",[t._v("breakpoint")]),t._v(" "),a("td",[t._v("???")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-permissions","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_permissions")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Collection these permissions apply to (Foreign Key: directus_collections)")])]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("Role these permissions apply to (Foreign Key: directus_roles)")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("Status these permissions apply to (from Collection's Status-Mapping)")])]),t._v(" "),a("tr",[a("td",[t._v("*allowed_statuses")]),t._v(" "),a("td",[t._v("Which Status-Mapping options can be chosen")])]),t._v(" "),a("tr",[a("td",[t._v("create")]),t._v(" "),a("td",[t._v("Create Item access")])]),t._v(" "),a("tr",[a("td",[t._v("read")]),t._v(" "),a("td",[t._v("Read/View Item access")])]),t._v(" "),a("tr",[a("td",[t._v("update")]),t._v(" "),a("td",[t._v("Update/Edit Item access")])]),t._v(" "),a("tr",[a("td",[t._v("delete")]),t._v(" "),a("td",[t._v("Hard-Delete Item access")])]),t._v(" "),a("tr",[a("td",[t._v("comment")]),t._v(" "),a("td",[t._v("Ability to comment on items")])]),t._v(" "),a("tr",[a("td",[t._v("explain")]),t._v(" "),a("td",[t._v("Ability to force a comment on when updating items")])]),t._v(" "),a("tr",[a("td",[t._v("read_field_blacklist")]),t._v(" "),a("td",[t._v("CSV of field names that can't be Read/Viewed")])]),t._v(" "),a("tr",[a("td",[t._v("write_field_blacklist")]),t._v(" "),a("td",[t._v("CSV of field names that can't be Created/Updated/Edited")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-relations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-relations","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_relations")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("collection_a")]),t._v(" "),a("td",[t._v("Collection name (A) for relationship")])]),t._v(" "),a("tr",[a("td",[t._v("field_a")]),t._v(" "),a("td",[t._v("Field name (A) for relationship")])]),t._v(" "),a("tr",[a("td",[t._v("junction_key_a")]),t._v(" "),a("td",[t._v("Field name (A) for the junction table (M2M and M2MM only)")])]),t._v(" "),a("tr",[a("td",[t._v("junction_collection")]),t._v(" "),a("td",[t._v("Collection name for the junction table (M2M and M2MM only)")])]),t._v(" "),a("tr",[a("td",[t._v("junction_mixed_collections")]),t._v(" "),a("td",[t._v("CSV of collection names allowed in relationship (M2MM only)")])]),t._v(" "),a("tr",[a("td",[t._v("junction_key_b")]),t._v(" "),a("td",[t._v("Field name (B) for the junction table (M2M and M2MM only)")])]),t._v(" "),a("tr",[a("td",[t._v("collection_b")]),t._v(" "),a("td",[t._v("Collection name (B) for relationship")])]),t._v(" "),a("tr",[a("td",[t._v("field_b")]),t._v(" "),a("td",[t._v("Field name (B) for relationship")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-revisions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-revisions","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_revisions")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("activity")]),t._v(" "),a("td",[t._v("Parent activity ID (Foreign Key: directus_activity)")])]),t._v(" "),a("tr",[a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("Name of Collection where item was updated (Foreign Key: directus_collections)")])]),t._v(" "),a("tr",[a("td",[t._v("item")]),t._v(" "),a("td",[t._v("ID of Item that was updated (Foreign Key: directus_revisions.collection)")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("JSON of this entire item after update")])]),t._v(" "),a("tr",[a("td",[t._v("delta")]),t._v(" "),a("td",[t._v("JSON of changes made to this item after update")])]),t._v(" "),a("tr",[a("td",[t._v("parent_item")]),t._v(" "),a("td",[t._v("ID of parent Item (relational edits only)")])]),t._v(" "),a("tr",[a("td",[t._v("parent_collection")]),t._v(" "),a("td",[t._v("ID of parent Collection (relational edits only)")])]),t._v(" "),a("tr",[a("td",[t._v("parent_changed")]),t._v(" "),a("td",[t._v("???")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-roles","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_roles")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("external_id")]),t._v(" "),a("td",[t._v("SCIM External ID")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("Name of this role")])]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("Description of this role")])]),t._v(" "),a("tr",[a("td",[t._v("ip_whitelist")]),t._v(" "),a("td",[t._v("CSV of IPs allowed to connect to the API/App")])]),t._v(" "),a("tr",[a("td",[t._v("nav_blacklist")]),t._v(" "),a("td",[t._v("CSV of navigation items IDs to hide")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-settings","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_settings")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("The key (name) of the settings option. Must be unique")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("The value of the settings option")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-user-roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-user-roles","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_user_roles")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("User's ID (Foreign Key: directus_users)")])]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("Role's ID (Foreign Key: directus_roles)")])])])]),t._v(" "),a("h3",{attrs:{id:"directus-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-users","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("directus_users")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Primary Key")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("Status of the user (active, draft, suspended, deleted)")])]),t._v(" "),a("tr",[a("td",[t._v("first_name")]),t._v(" "),a("td",[t._v("First name (given) of the user")])]),t._v(" "),a("tr",[a("td",[t._v("last_name")]),t._v(" "),a("td",[t._v("Last name (surname) of the user")])]),t._v(" "),a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[t._v("Email of the user. Must be unique within users")])]),t._v(" "),a("tr",[a("td",[t._v("email_notifications")]),t._v(" "),a("td",[t._v("If the user should receive email updates from this instance")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("Hashed password of user")])]),t._v(" "),a("tr",[a("td",[t._v("avatar")]),t._v(" "),a("td",[t._v("ID of file/image used as user's avatar (Foreign Key: directus_files)")])]),t._v(" "),a("tr",[a("td",[t._v("company")]),t._v(" "),a("td",[t._v("Company the user works for")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Title/Position of user")])]),t._v(" "),a("tr",[a("td",[t._v("locale")]),t._v(" "),a("td",[t._v("Locale of user for multilingual support in App")])]),t._v(" "),a("tr",[a("td",[t._v("theme")]),t._v(" "),a("td",[t._v("JSON of CSS colors to use (eg: dark-mode or high-contrast-mode")])]),t._v(" "),a("tr",[a("td",[t._v("locale_options")]),t._v(" "),a("td",[t._v("Provides additional support for languages, etc")])]),t._v(" "),a("tr",[a("td",[t._v("timezone")]),t._v(" "),a("td",[t._v("Timezone of the user")])]),t._v(" "),a("tr",[a("td",[t._v("last_access")]),t._v(" "),a("td",[t._v("Datetime of user's last access. Used to check if online")])]),t._v(" "),a("tr",[a("td",[t._v("last_page")]),t._v(" "),a("td",[t._v("Last page user accessed. Used to return user to same page during next session")])]),t._v(" "),a("tr",[a("td",[t._v("last_ip")]),t._v(" "),a("td",[t._v("Last IP user used to access")])]),t._v(" "),a("tr",[a("td",[t._v("last_login")]),t._v(" "),a("td",[t._v("Datetime of user's last login")])]),t._v(" "),a("tr",[a("td",[t._v("token")]),t._v(" "),a("td",[t._v("Static API token for connecting to the API with this user's permissions")])]),t._v(" "),a("tr",[a("td",[t._v("external_id")]),t._v(" "),a("td",[t._v("SCIM External ID")])])])])])},[],!1,null,null,null);i.options.__file="database.md";e.default=i.exports}}]);