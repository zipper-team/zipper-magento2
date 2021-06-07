# zipper-magento2
> zipper-magento2

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d0047086b0bd4df2934559f6dcf0d597)](https://www.codacy.com/gh/zipper-team/zipper-magento2/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=zipper-team/zipper-magento2&amp;utm_campaign=Badge_Grade)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

## Build Setup
There are 2 files needed to the insert to work, one is **/resouces/produtos.json**, which is the products you want to insert on magento and **/config/dev.json** which is the authorization variables from magento. Both of them have their on examples in their folders. 

```bash
# up mangento on docker
$ docker-compose up -d

# install dependencies
$ yarn

# insert products in magento
$ yarn insert
```

