export default {
    routes: [
      {
        path: '/',
        component: './index',
      },
    ],
    history: 'hash',
    hash:true,
    disableCSSModules:true,
    
    plugins: [
      [
        'umi-plugin-react',
        {
          antd: true,
        },
      ]
    ],
  };
  
  