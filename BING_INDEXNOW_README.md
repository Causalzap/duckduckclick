# Bing IndexNow 快速提交指南

## 1. 生成密钥

1. 访问 [Bing IndexNow 入门页面](https://www.bing.com/indexnow/getstarted#)
2. 生成密钥并下载密钥文件
3. 将密钥文件上传到网站根目录

## 2. 提交 URL (curl 命令)

```bash
curl -X POST "https://www.bing.com/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "crazy-cattle.net",
    "key": "60c1f021f8bf4251a63eace188cfc920",
    
    "keyLocation": "https://www.duckduckclick.com/60c1f021f8bf4251a63eace188cfc920.txt",
    "urlList": [
      "https://www.duckduckclick.com/",
      "https://www.duckduckclick.com/crazy-chicken-3d",
      "https://www.duckduckclick.com/crazy-cow-3d",
      "https://www.duckduckclick.com/cheese-chompers-3d",
      "https://www.duckduckclick.com/basketball-bros-unblocked",
      "https://www.duckduckclick.com/brainrot-clicker",
      "https://www.duckduckclick.com/pokemon-gamma-emerald"
    ]
  }'
```

添加 `-v` 参数可查看详细响应：

```bash
curl -v -X POST "https://www.bing.com/IndexNow" ...
```