import { lazy } from 'react'
import { TeamOutlined } from '@ant-design/icons'
import { AdminRouterItem } from '../../router'
import LazyRoute from '../../components/common/LazyRoute'

const AlunosPage = lazy(() => import('.'))

const alunosRoutes: AdminRouterItem[] = [
  {
    path: 'alunos',
    element: (
      <LazyRoute>
        <AlunosPage />
      </LazyRoute>
    ),
    meta: {
      label: 'Alunos',
      title: 'Alunos',
      key: '/alunos',
      icon: <TeamOutlined />,
      order: 2,
    },
  },
]

export default alunosRoutes
