export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5da29828850f2bb030d8f3e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mkam5iti',
                  apiId: '1baf512f-340e-431b-9aa9-be9e8b1a65ff'
                },
                {
                  buildHookId: '5da29829ee02f9ae6ca01c45',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ds1p7tn9',
                  apiId: '5d248b26-9c92-4f5e-94f4-9f8e1fe3261e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thatcube/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ds1p7tn9.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
