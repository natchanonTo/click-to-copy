const btn = document.getElementById('btn-copy');
const coupon = document.querySelector('.coupon');
btn.addEventListener('click', () => {
    coupon.select();
    coupon.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = 'คัดลอกแล้ว!';
    setTimeout(() => {
        btn.textContent = 'คัดลอก';
    }, 2000);
});