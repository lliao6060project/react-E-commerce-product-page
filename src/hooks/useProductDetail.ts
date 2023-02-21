import { useState, useEffect } from 'react';
import api from '@/services';

export default function useProductDetail() {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState();

  const fetchProductDetail = async () => {
    // setLoading(true);
    // const res = await api.getProductDetail();
    // setDetail(res.product);
    // setLoading(false);
  };

  return [detail, { loading, fetchProductDetail }];
}
