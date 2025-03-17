import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // عند التبديل إلى مسار جديد، اجعل التمرير في الصفحة يعود إلى الأعلى
    window.scrollTo(0, 0);
  }, [location]); // سيُنفذ عند تغيير المسار (الموقع)

  return null; // لا حاجة لعرض شيء
};

export default ScrollToTop;
