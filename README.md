# SASS-21

### Giới thiệu về SASS và lưu ý về SASS

    -   Là n/ngữ lập trình
    -   Tiền xử lý css, phần mở rộng của css
    -   Mục đích biến css giống với n/ngữ l/trình
    -   Code hóa để dễ quản lý

### So sánh giữa SASS và SCSS

    -   SASS:
        +   Syntacically Awesome Style-Sheets
        +   Original Language
        +   Short syntax

    -   SCSS:
        +   SASSY CSS
        +   Newer Syntax
        +   Closer to CSS
        +   De-Facto Standard

### Setup SASS theo hướng Ruby gem

    -   gem install sass
    -   sass -v

### How To Compile Your SASS/SCSS To CSSKiểm tra nhanh SASS

    -   Live Sass Compiler extensions

### Cấu trúc Project và Config Generate Code

    -   Live sass compiler -> Setting.json ->
        "liveSassCompile.settings.formats": [
            {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": null
            },

            {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/min"
            }

        ]

### Tìm hiểu về biến ở trong SASS
