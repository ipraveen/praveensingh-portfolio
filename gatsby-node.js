const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                "components": path.resolve(__dirname, "src/components"),
                "config": path.resolve(__dirname, "src/config"),
                "hooks": path.resolve(__dirname, "src/hooks"),
                "assets": path.resolve(__dirname, "src/assets"),
              }
        },
        
    });
};