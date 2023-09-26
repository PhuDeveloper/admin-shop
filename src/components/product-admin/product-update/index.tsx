'use client';
import TextEditorComponent from '@/components/text-editor';
import { ProductStatusEnum } from '@/enums/product';
import useSearchBrandInput from '@/hooks/brand/useSearchBrandInput';
import useSearchCategoryInput from '@/hooks/category/useSearchCategoryInput';
import useGetDetailProduct from '@/hooks/product/useGetDetailProduct';
import { updateProduct } from '@/services/product/update';
import { uploadFile } from '@/services/upload';
import { UpdateProductRequest } from '@/types/product';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Image, Input, InputNumber, Result, Row, Select, Tooltip } from 'antd';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CreateProductFormValue } from './type';
import { useRouterProductParams } from '@/hooks/product/useRouterProduct';

export default function ProductUpdateFormComponent() {
  const router = useRouter();

  const { productDetail } = useGetDetailProduct();
  const { brandList } = useSearchBrandInput();
  const { categoryList } = useSearchCategoryInput();
  const { id } = useRouterProductParams();

  const [listImageState, setListImageState] = useState<string[]>([]);
  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<CreateProductFormValue>();

  useEffect(() => {
    setValueEditor(productDetail?.productDescription ?? '');
    setListImageState(productDetail?.imageUrlList ?? []);
    form.setFieldsValue({
      brand: { value: productDetail?.brand?.id ?? 0, label: productDetail?.brand?.brandName ?? '' },
      category: {
        value: productDetail?.category?.id ?? 0,
        label: productDetail?.category?.categoryName ?? '',
      },
      productCode: productDetail?.productCode ?? '',
      productName: productDetail?.productName ?? '',
      productPriceDiscount: productDetail?.productPriceDiscount ?? 0,
      productPriceOrg: productDetail?.productPriceOrg ?? 0,
      productStart: productDetail?.productStart ?? 0,
      productStatus: productDetail?.productStatus,
    });
  }, [productDetail]);

  const handleUpdateProduct = (value: CreateProductFormValue) => {
    const request: UpdateProductRequest = {
      productId: Number(id),
      data: {
        brand: {
          id: value.brand.value,
        },
        category: {
          id: value.category.value,
        },
        productName: value.productName,
        productStatus: value.productStatus,
        productDescription: valueEditor,
        productPriceDiscount: value.productPriceDiscount ?? 0,
        productPriceOrg: value.productPriceOrg,
        productStart: value.productStart,
        imageUrl: listImageState[0],
        imageUrlList: listImageState,
      },
    };

    updateProduct(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Cập nhật sản phẩm thất bại`, {
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

        toast.success(`Cập nhật sản phẩm thành công`, {
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

  if (!productDetail) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Không tìm thấy dữ liệu bạn yêu cầu"
        extra={
          <Button
            type="primary"
            onClick={() => {
              router.back();
            }}
          >
            Quay về
          </Button>
        }
      />
    );
  }

  return (
    <Form
      name="filterProduct"
      labelWrap
      labelAlign="left"
      labelCol={{ flex: '20%' }}
      onFinish={handleUpdateProduct}
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
            <Input placeholder="Nhập mã sản phẩm" readOnly />
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
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value!.replace(/\s?|(,*)/g, '')}
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
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
