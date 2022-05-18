import { siteConfig } from './lib/site-config'

export default siteConfig({
 // the site's root Notion page (required)
  rootNotionPageId: '4bcc0688001545f79c0febcf6de8f00b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'geekreal',
  domain: 'blog.geekreal.cn',
  author: 'geekreal',

  // open graph metadata (optional)
  description: '宇宙很大,生活更大',
  // social usernames (optional)

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '生活',
      pageId: '72adfb08009d468689758f7a451f2a2c'
    },
    {
      title: '街舞',
      pageId: 'd771a57f1031415fb3b5db5997089f94'
    }
  ]
})
