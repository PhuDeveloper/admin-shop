'use client';
import { ProductStatusEnum } from '@/enums/product';
import useSearchBrandInput from '@/hooks/brand/useSearchBrandInput';
import useSearchCategoryInput from '@/hooks/category/useSearchCategoryInput';
import { uploadFile } from '@/services/upload';
import { CreateProductRequest } from '@/types/product';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Image, Input, InputNumber, Row, Select, Tooltip } from 'antd';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';
import { CreateProductFormValue } from './type';

import TextEditorComponent from '@/components/text-editor';
import { createProduct } from '@/services/product/create';
import { toast } from 'react-toastify';

export default function ProductCreateFormComponent() {
  const router = useRouter();

  const { brandList } = useSearchBrandInput();
  const { categoryList } = useSearchCategoryInput();

  const [listImageState, setListImageState] = useState<string[]>([]);
  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<CreateProductFormValue>();
  const handleCreateProduct = (value: CreateProductFormValue) => {
    const request: CreateProductRequest = {
      brandId: value.brand,
      categoryId: value.category,
      productName: value.productName,
      productCode: value.productCode,
      productStatus: value.productStatus,
      isDeleted: 0,
      productDescription: valueEditor,
      productPriceDiscount: value.productPriceDiscount ?? 0,
      productPriceOrg: value.productPriceOrg,
      productStart: value.productStart,
      imageUrl: listImageState[0],
      imageUrlList: listImageState,
    };

    createProduct(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Tạo sản phẩm thất bại`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          return;
        }

        toast.success(`Tạo sản phẩm thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        router.push('/admin/product');
      })
      .catch((error) => {
        toast.error(`Có lỗi xảy ra`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadFile({ file: e?.target?.files[0] })
        .then((res) => {
          if (!res.payload?.url) return;
          const imgNew = [...listImageState, res.payload?.url];

          setListImageState(imgNew);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteImg = (index: number) => {
    const updatedList = [...listImageState];

    // Xác định vị trí index và xóa phần tử tại vị trí đó
    if (index >= 0 && index < updatedList.length) {
      updatedList.splice(index, 1);

      // Cập nhật state listImage với mảng đã được xóa phần tử
      setListImageState(updatedList);
    }
  };

  return (
    <Form
      name="filterProduct"
      labelWrap
      labelAlign="left"
      labelCol={{ flex: '20%' }}
      onFinish={handleCreateProduct}
      form={form}
    >
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            name="productName"
            label={<p>Tên sản phẩm</p>}
            rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="productCode"
            label={<p>Mã sản phẩm</p>}
            rules={[{ required: true, message: 'Vui lòng nhập mã sản phẩm' }]}
          >
            <Input placeholder="Nhập mã sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="category" label={<p>Danh mục sản phẩm</p>}>
            <Select
              showSearch
              placeholder="Chọn danh mục"
              optionFilterProp="label"
              allowClear
              options={categoryList.map((item) => {
                return {
                  value: item.id,
                  label: item.categoryName,
                };
              })}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="brand" label={<p>Thương hiệu</p>}>
            <Select
              showSearch
              placeholder="Chọn thương hiệu"
              optionFilterProp="label"
              allowClear
              options={brandList.map((item) => {
                return {
                  value: item.id,
                  label: item.brandName,
                };
              })}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="productPriceOrg"
            label={<p>Giá gốc</p>}
            rules={[{ required: true, message: 'Vui lòng nhập giá' }]}
          >
            <InputNumber
              placeholder="Nhập giá gốc sản phẩm"
              style={{ width: '100%' }}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productPriceDiscount" label={<p>Phần trăm giảm (%)</p>}>
            <InputNumber
              placeholder="Nhập phần trăm giảm"
              style={{ width: '100%' }}
              min={0}
              max={100}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productDescription" label={<p>Mô tả sản phẩm</p>}>
            <TextEditorComponent valueEditor={valueEditor} setValueEditor={setValueEditor} />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="imageUrlList" label={<p>Hình ảnh sản phẩm</p>}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {listImageState.length > 0 &&
                listImageState.map((url, index) => {
                  return (
                    <div style={{ margin: '5px' }} key={index}>
                      <Image width={150} src={url} height={150} />
                      <div>
                        <Tooltip title="Xóa hình ảnh">
                          <Button
                            icon={<FontAwesomeIcon icon={faTrash} />}
                            type="link"
                            onClick={() => handleDeleteImg(index)}
                          />
                        </Tooltip>
                      </div>
                    </div>
                  );
                })}
            </div>
            <input type="file" onChange={(e) => handleUploadImage(e)} accept=".jpg, .jpeg, .png" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="productStart"
            label={<p>Số sao</p>}
            rules={[{ required: true, message: 'Vui lòng nhập số sao' }]}
          >
            <InputNumber placeholder="Nhập số sao" style={{ width: '100%' }} min={0} max={5} />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productStatus" label={<p>Trạng thái</p>}>
            <Select
              placeholder="Chọn trạng thái"
              defaultValue={ProductStatusEnum[0]}
              optionFilterProp="label"
              allowClear
              options={ProductStatusEnum}
            />
          </Form.Item>
        </Col>

        <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={() => {
                router.push('/admin/product');
              }}
            >
              Hủy
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
