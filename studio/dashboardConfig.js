export default {
  widgets: [
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
                  buildHookId: '5ebc7518504c4001f68972ce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7q43dbrt',
                  apiId: '54df9317-41c2-4806-b600-16c668778885'
                },
                {
                  buildHookId: '5ebc7519ed34be17a2e300e1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-np35jyz9',
                  apiId: '55b84565-6c02-4a15-add7-a9b5ca426e03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabrielsurraco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-np35jyz9.netlify.app', category: 'apps'}
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
