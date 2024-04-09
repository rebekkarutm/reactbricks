/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    'react-bricks',
    'react-bricks/frontend',
    'react-dropzone',
    'pigeon-maps/providers',
    
    'prismjs/components/prism-typescript',
    'prismjs/components/prism-bash',
    'prismjs/components/prism-jsx',
    'prismjs/components/prism-tsx',
    'prismjs/plugins/line-numbers/prism-line-numbers.js',
    'prismjs/plugins/show-language/prism-show-language.js',
    'prismjs/plugins/line-highlight/prism-line-highlight.js',

    'react-icons/fi',
    'react-icons/bs',
    'react-icons/io5',
    'react-icons/ri',
    'react-icons/vsc',
    'react-icons/fa',
    'react-icons/md',
    'react-icons/hi2',
    'react-icons/ai',
    'react-icons/fc',
    'date-fns/format',
    'date-fns/isAfter',
    'date-fns/isBefore',
    'date-fns/compareAsc',
    'date-fns/getDay',
    'date-fns/locale/en-GB',
    'date-fns/parse',
    'date-fns/startOfWeek',
    'date-fns/parseISO',
  ],
}