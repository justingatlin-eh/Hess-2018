/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import Link from 'gatsby-link'
import DownloadIcon from '../../assets/download-small.png'
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import TenK from '../../assets/Hess_10Kcover.png'
import ARCover from '../../assets/Hess_AR2017_Cover.png'
import ARPDF from '../../assets/1721_Hess_AR2017_Promo1B.pdf'
import Hess10K from '../../assets/Hess_10Kcover.png'

class CustomModel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isopen: false }
  }

  render() {
    return (
      <div className="modal-main">
        <table className="modal" data-isopen={this.props.isopen}>
          <tbody>
            <tr>
              <td>
                <div className="modal-body">
                  <div onClick={this.props.handleToggle} className="close">
                    &#215;
                  </div>
                  <a href={ARPDF} download="Hess 2017 Annual Report.pdf">
                    <img src={ARCover} />
                    <span>2017 Annual Report</span>
                  </a>
                  <a href={Hess10K} download="Hess 2017 10-K.pdf">
                    <img src={TenK} />
                    <span>2017 Form 10-K</span>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CustomModel
