import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';


interface IHeaderProps {
  title : string
  closeClickAction : () => void
}



export default class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    let title = this.props.title
    let closeAction = this.props.closeClickAction
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={closeAction}>
            <CloseIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

