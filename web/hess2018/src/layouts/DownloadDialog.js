import React from 'react'
import Dialog from 'react-dialog'

class DownloadDialog extends React.Component {
  constructor() {
    super()
    this.state = {
      isDialogOpen: false,
    }
  }

  openDialog = () => this.setState({ isDialogOpen: true })

  handleClose = () => this.setState({ isDialogOpen: false })

  render() {
    return (
      <div className="container download">
        {this.state.isDialogOpen && (
          <Dialog
            modal={true}
            onClose={this.handleClose}
            buttons={[{ text: 'Close', onClick: () => this.handleClose() }]}
            hasCloseIcon={true}
          >
            <h1>Downloads</h1>
            <p>Download This</p>
          </Dialog>
        )}
      </div>
    )
  }
}

export default DownloadDialog
