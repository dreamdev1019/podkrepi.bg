import Link from 'next/link'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview'

import { routes } from 'common/routes'

type Props = {
  id: string
  name: string
  loadInfo: (id: string) => void
  openDialog: (id: string, name: string) => void
}

const ActionsButtons = ({ id, name, loadInfo, openDialog }: Props) => {
  return (
    <>
      <IconButton color="primary" onClick={() => loadInfo(id)}>
        <PreviewIcon />
      </IconButton>
      <Link href={routes.admin.countries.view(id)} passHref>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton color="primary" onClick={() => openDialog(id, name)}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default ActionsButtons
