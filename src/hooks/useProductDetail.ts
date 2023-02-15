import { useState, useEffect } from 'react';
import service from '@/service';

export default function useProductDetail() {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState();

  const fetchProductDetail = async () => {
    setLoading(true);
    const res = await service.getProductDetail();
    setDetail(res.product);
    setLoading(false);
  };

  return [detail, { loading, fetchProductDetail }];
}
