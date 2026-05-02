# GitHub Pages 固定部署

把 `E:\code\tiantan-webar-deploy` 文件夹里的所有内容上传到 GitHub Pages 仓库根目录。

建议 Pages 设置：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

固定访问地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

WebAR 页面：

```text
https://你的用户名.github.io/仓库名/index.html
```

预览页面：

```text
https://你的用户名.github.io/仓库名/preview.html
```

部署后请用 Safari 或 Chrome 打开，微信内置浏览器可能无法正常调用摄像头。

## 生成正式二维码

GitHub Pages 生效后，在 `E:\code\tiantan-webar` 目录运行：

```powershell
python make_github_pages_qr.py https://你的用户名.github.io/仓库名
```

脚本会生成：

- `qr\tiantan-webar-github-pages-qr-sheet.png`
- `qr\card-webar_github.png`
- `qr\card-preview_github.png`

同时会把这些二维码复制到 `E:\code\tiantan-webar-deploy\qr` 和 `E:\code\tiantan-webar-github-pages\qr`，方便继续上传。
