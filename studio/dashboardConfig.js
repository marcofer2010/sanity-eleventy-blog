export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df7b8091f9fa5518368493b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4gya3uvi',
                  apiId: '0e8dfd4a-4b74-4cdf-b6a1-e1faa9f31b27'
                },
                {
                  buildHookId: '5df7b80a47884afb8b4e6985',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qyexabpo',
                  apiId: 'c898ad46-0b6c-4077-bbf5-ad79ddc0664b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcofer2010/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qyexabpo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
