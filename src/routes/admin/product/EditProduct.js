/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css';
import {Modal, Input, Button, Switch, Select, Row, Col, Card, Tabs, message, InputNumber, Affix} from 'antd';
import axios from 'axios';
import history from '../../../core/history'
import CustomTag from '../Components/Tags'
import ImageUpload from '../Components/ImageUpload'
import ImageSelect from '../Components/ImageSelect'
import fetch from '../../../core/fetch';
const TabPane = Tabs.TabPane;
import CKEditor from '../Components/CKEditor'
const Option = Select.Option;

class EditNewsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: [],
        coverUrl2: [],
        coverUrl3: []
      }
    }
    if(this.props.isEdit) this.init(this.props.slug)
  }

  async init (slug) {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ getOneProduct(slug: "'+ slug +'"){category, unit, loai, name, slug, price, newPrice, coverUrl, coverUrl2, coverUrl3, description, saleOff, body, created_at} }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    console.log(data)
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        data: data.getOneProduct
      }
    })
  }

  handleCoverUpload (img) {
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          coverUrl: '/image/' + img.name
        }
      }
    })
  }

  handleCoverUpload2 (img) {
    let coverUrl2 = this.state.data.coverUrl2
    coverUrl2.push('/image/' + img.name)
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          coverUrl2: coverUrl2
        }
      }
    })
  }
  handleCoverUpload3 (img) {
    let coverUrl3 = this.state.data.coverUrl3
    coverUrl3.push('/image/' + img.name)
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          coverUrl3: coverUrl3
        }
      }
    })
  }

  showModalSelectImage = (type) => {
    this.setState(prev => {
      return {
        ...prev,
        modalSelectImage: true,
        selectImageType: type
      }
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      modalSelectImage: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      modalSelectImage: false,
    });
  }
  handleSelectImage(img){
    if(this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            coverUrl: '/image/' + img.name
          }
        }
      })
    } else if (this.state.selectImageType === 'cover2') {
      let coverUrl2 = this.state.data.coverUrl2
      coverUrl2.push('/image/' + img.name)
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            coverUrl2: coverUrl2
          }
        }
      })
    } else if (this.state.selectImageType === 'cover3') {
      let coverUrl3 = this.state.data.coverUrl3
      coverUrl3.push('/image/' + img.name)
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            coverUrl3: coverUrl3
          }
        }
      })
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name)
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
        }
      })
    }
  }

  addProduct(product){
    axios.post('/api/product/new', product)
      .then(res => {
        message.success('Thêm mới thành công!')
        history.push({
          pathname: '/admin/product',
          search: '?v=edit&slug=' + res.data.slug
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateProduct(product){
    axios.post('/api/product/update', product)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  render() {
    if(this.props.loading){
      return (<div>loading...</div>)
    }
    return (
      !this.state.loading && <div className="admin-editor">
        <Row className="padding-5" style={{marginBottom: 15}}>
          <Affix
            offsetTop={10}
          >
            {this.props.isEdit && <Button type="primary" style={{float: 'right'}}
                                          size="large"
              onClick={() => {
                this.updateProduct(this.state.data)
              }}
            >Cập nhập</Button>}
            {!this.props.isEdit && <Button
              size="large"
              type="primary"
              style={{float: 'right'}}

              onClick={() => {
                this.addProduct(this.state.data)
              }}
            >Thêm mới</Button>}
          </Affix>
        </Row>
        <Row>
          <Tabs type="card">
            <TabPane tab="Thông tin bài viết" key="1">
              <Row>
                <Col sm={12} className="padding-5" >
                  <div style={{ marginBottom: 16 }}>
                    <label><b>Tên sản phẩm:</b></label>
                    <Input
                      placeholder="Tên sản phẩm"
                      defaultValue={this.state.data.name}
                      onChange={(e) => {
                        let that = this
                        let value = e.target.value
                        let newSlug = function(){
                          if(that.props.isEdit)
                            return that.state.data.slug
                          else {
                            return slugify(value)
                          }
                        }
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              name: value,
                              slug: newSlug()
                            }
                          }
                        })
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label><b>slug:</b></label>
                    <Input
                      placeholder="Slug"
                      disabled={this.props.isEdit}
                      value={this.state.data.slug}
                      onChange={(e) => {
                        let value = e.target.value
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              slug: value
                            }
                          }
                        })
                      }}
                    />
                  </div>


                  <div style={{ marginBottom: 16 }}>
                    <label><b>Danh mục: </b></label>
                    <Select
                      // mode="multiple"
                      placeholder="chọn danh mục"
                      defaultValue={this.state.data.category}
                      onChange={(value) => {
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              category: value
                            }
                          }
                        })
                      }}
                      style={{ width: '100%' }}
                    >
                      <Option key={'ung-thu'}>Ung thư</Option>
                      <Option key={'san-pham-bo-gan'}>Sản phẩm bổ gan</Option>
                      <Option key={'duong-huyet-huyet-ap'}>Đường huyết - Huyết áp</Option>
                      <Option key={'da-day'}>Dạ dày</Option>
                      <Option key={'giam-can'}>Giảm cân</Option>
                      <Option key={'lam-dep'}>Làm đẹp</Option>
                      <Option key={'xuong-khop'}>Xương khớp</Option>
                      <Option key={'bo-tong-hop'}>Bổ tổng hợp</Option>
                      <Option key={'nano-curcumin'}>Nano Curcumin</Option>
                      <Option key={'toi-den'}>Tỏi đen</Option>
                      <Option key={'san-pham-khac'}>Sản phẩm khác</Option>
                    </Select>
                    <br />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label><b>Quy cách: </b></label>
                    <Input
                      placeholder="Quy cách"
                      value={this.state.data.unit}
                      onChange={(e) => {
                        let value = e.target.value
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              unit: value
                            }
                          }
                        })
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label><b>Loại: </b></label>
                    <Select
                      mode="multiple"
                      placeholder="Chọn loại"
                      defaultValue={this.state.data.loai}
                      onChange={(value) => {
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              loai: value
                            }
                          }
                        })
                      }}
                      style={{ width: '100%' }}
                    >
                      <Option key={'noi-bat'}>Nổi bật</Option>
                      <Option key={'ban-chay'}>Bán chạy</Option>
                      <Option key={'khuyen-mai'}>Khuyến mại</Option>
                    </Select>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <Col sm={12} className="padding-5">
                      <label><b>Giá cũ:</b></label>
                      <br/>
                      <InputNumber
                        defaultValue={this.state.data.price || 0}
                        min={0}
                        formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                        parser={value => value.replace(/(,*)/g, '')}
                        style={{minWidth: 200}}
                        onChange={(value) => {
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                price: parseInt(value)
                              }
                            }
                          })
                        }}
                      />
                    </Col>

                    <Col sm={12} className="padding-5">
                      <label><b>Giá mới:</b></label>
                      <br/>
                      <InputNumber
                        defaultValue={this.state.data.newPrice || 0}
                        min={0}
                        formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                        parser={value => value.replace(/(,*)/g, '')}
                        style={{minWidth: 200}}
                        onChange={(value) => {
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                newPrice: parseInt(value)
                              }
                            }
                          })
                        }}
                      />
                    </Col>
                  </div>


                  <div style={{ marginBottom: 16 }}>
                    <label><b>Mô tả ( {(this.state.data.description.length >= 140 && this.state.data.description.length <= 150) ? <span style={{color: 'blue'}}>{this.state.data.description.length}</span> : <span style={{color: 'red'}}>{this.state.data.description.length}</span>} /150) :</b></label>
                    <Input type="textarea"
                           autosize={{ minRows: 2, maxRows: 10 }}
                           defaultValue={this.state.data.description}
                           onChange={(e) => {
                             let value = e.target.value
                             this.setState(prev => {
                               return {
                                 ...prev,
                                 data: {
                                   ...prev.data,
                                   description: value
                                 }
                               }
                             })
                           }}
                    />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <Col sm={12} className="padding-5">
                      <label><b>Ảnh khách hàng:</b></label>
                      <ImageUpload
                        isMultiple={false}
                        handleUpload={(img) => this.handleCoverUpload3(img)}
                      />
                      <br/>
                      <Button style={{marginRight: 10}}
                              onClick={() => this.showModalSelectImage('cover3')}
                      >Chọn ảnh từ thư viện</Button>
                    </Col>

                    <Col sm={12} className="padding-5">
                      <div style={{ marginBottom: 16 }}>
                        <div>
                          {(this.state.data.coverUrl3 || []).map((el,idx) => {
                            return (
                              <img key={idx} src={el} style={{height: 70, width: 'auto', margin: 5}}
                                   onClick={() => {

                                     let coverUrl3 = this.state.data.coverUrl3
                                     coverUrl3.splice(idx, 1);
                                     this.setState(prevState => {
                                       return {
                                         ...prevState,
                                         data: {
                                           ...prevState.data,
                                           coverUrl3: coverUrl3
                                         }
                                       }
                                     })
                                   }}
                              />
                            )
                          })}
                        </div>
                      </div>
                    </Col>
                  </div>


                </Col>



                <Col sm={12} className="padding-5">
                  <div style={{ marginBottom: 16 }}>
                    <label><b>Ảnh đại diện:</b></label>
                    {!this.state.data.coverUrl && <ImageUpload
                      isMultiple={false}
                      handleUpload={(img) => this.handleCoverUpload(img)}
                    />}
                    {this.state.data.coverUrl && <Card bordered={false} className="imgWr"
                                                       onClick={() => this.showModalSelectImage('cover')}
                    >
                      <img src={this.state.data.coverUrl} />
                    </Card>}
                  </div>
                  <Button style={{marginRight: 10}}
                          onClick={() => this.showModalSelectImage('cover')}
                  >Chọn ảnh từ thư viện</Button>
                  {this.state.data.coverUrl && <Button
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          data: {
                            ...prevState.data,
                            coverUrl: null
                          }
                        }
                      })
                    }
                    }
                  >Xóa ảnh </Button>}

                  <br/>


                  <Col sm={12} className="padding-5">
                    <label><b>Ảnh khác:</b></label>
                    <ImageUpload
                      isMultiple={false}
                      handleUpload={(img) => this.handleCoverUpload2(img)}
                    />
                    <br/>
                    <Button style={{marginRight: 10}}
                            onClick={() => this.showModalSelectImage('cover2')}
                    >Chọn ảnh từ thư viện</Button>
                  </Col>

                  <Col sm={12} className="padding-5">
                    <div style={{ marginBottom: 16 }}>
                      <div>
                        {(this.state.data.coverUrl2 || []).map((el,idx) => {
                          return (
                            <img key={idx} src={el} style={{height: 70, width: 'auto', margin: 5}}
                              onClick={() => {

                                let coverUrl2 = this.state.data.coverUrl2
                                coverUrl2.splice(idx, 1);
                                this.setState(prevState => {
                                  return {
                                    ...prevState,
                                    data: {
                                      ...prevState.data,
                                      coverUrl2: coverUrl2
                                    }
                                  }
                                })
                              }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </Col>

                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Nội dung" key="2">
              <Row >
                <div style={{maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto'}}>
                  <Col className="padding-5">
                    <CKEditor
                      id={1}
                      value={this.state.data.body || ''}
                      onChange={(value) => {
                        console.log(value)
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              body: value
                            }
                          }
                        })
                      }}
                    />
                  </Col>

                </div>
              </Row>
            </TabPane>
          </Tabs>
        </Row>
        <Modal
          style={{top: 30}}
          width="90%"
          title="Basic Modal" visible={this.state.modalSelectImage}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <ImageSelect handleSelect={(img) => this.handleSelectImage(img)} />
        </Modal>
      </div>
    );
  }
}

function slugify(str)
{
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

export default withStyles(s)(EditNewsComponent)
