// component
import SvgColor from '../../../components/svg-color';
import Logo from '../../../components/logo';
// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const img = (name) => <Logo src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;
const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Patients',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Docteurs',
    path: '/dashboard/products',
    img: img('ic_doctor.png'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
