//import { Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch, useSelector } from "react-redux"
//import { MailOutline } from "@mui/icons-material"


export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {

      dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

    {/*
      <Typography>
        Duis eu irure veniam nisi eu nisi amet qui commodo aliquip voluptate minim 
        pariatur tempor. Aliquip irure ex fugiat velit sit cupidatat nulla est fugiat 
        quis dolor nulla excepteur. Est qui aute ut elit irure fugiat est. Ut duis nostrud
        incididunt occaecat labore est est sit est nulla. Consectetur ullamco pariatur 
        culpa ex id. Velit labore enim proident aliqua incididunt.
      </Typography>
    */}

      { active? <NoteView /> : <NothingSelectedView /> }

      <IconButton
        onClick={ onClickNewNote }
        disabled={ isSaving }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
