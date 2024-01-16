import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { startActivateNote } from "../../store/journal/thunks";

export const SideBarItem = ( { title = '', body, id, date, imagesUrls = []} ) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( startActivateNote( { title, body, id, date, imagesUrls } ) )
    }

    const newTitle = useMemo( () => {
        return title.length > 17 
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])


  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
    imagesUrls: PropTypes.array
};
