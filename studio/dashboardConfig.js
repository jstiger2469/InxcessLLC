export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6363f0537cc11a00a9920b01',
                  title: 'Sanity Studio',
                  name: 'inxcessllc-studio',
                  apiId: 'ebd0a74a-dd3b-4717-8b60-3c8c76f4ed76'
                },
                {
                  buildHookId: '6363f053d45c6103fcc4cc03',
                  title: 'Landing pages Website',
                  name: 'inxcessllc',
                  apiId: 'b189a22c-3de1-48a9-aa18-616cfd525cd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jstiger2469/InxcessLLC',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://inxcessllc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
