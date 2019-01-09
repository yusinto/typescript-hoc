import universalHotReload from 'universal-hot-reload';
import serverConfig from '../webpack.config.server';
import clientConfig from '../webpack.config.client';

universalHotReload(serverConfig, clientConfig);
