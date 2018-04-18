/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import Link from 'gatsby-link'
import DownloadIcon from '../../assets/download-icon.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TenK from '../../assets/Hess_10Kcover.png'
import ARCover from '../../assets/Hess_AR2017_Cover.png'
import '../../assets/1721_Hess_AR2017_Promo1B.pdf'

class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
    console.log('classname', this.props.className)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <div>
        <img
          className="button"
          id="dload"
          src={DownloadIcon}
          onClick={this.toggle}
        />
        <Modal
          centered={true}
          isOpen={this.state.modal}
          toggle={this.toggle}
          backdrop={false}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            <span>Downloads</span>
          </ModalHeader>
          <ModalBody>
            <a href="javascript: void(0);">
              <img src={TenK} />
            </a>
            <a href="javascript: void(0);">
              <img src={ARCover} />
            </a>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
