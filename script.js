function showToast(type) {
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const status = {
        success: {
            icon: 'fa-circle-check',
            title: 'Thành công',
            msg: 'Yêu cầu của bạn đã được xử lý!'
        },
        error: {
            icon: 'fa-circle-xmark',
            title: 'Lỗi hệ thống',
            msg: 'Đã có lỗi xảy ra, vui lòng thử lại.'
        },
        info: {
            icon: 'fa-circle-info',
            title: 'Thông tin',
            msg: 'Hệ thống sẽ bảo trì lúc 23:00 tối nay.'
        },
        warning: {
            icon: 'fa-triangle-exclamation',
            title: 'Cảnh báo',
            msg: 'Tài khoản của bạn sắp hết hạn.'
        }
    };

    const info = status[type];

    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fa-solid ${info.icon}"></i>
        </div>
        <div class="toast-body">
            <span class="toast-title">${info.title}</span>
            <span class="toast-msg">${info.msg}</span>
        </div>
        <div class="toast-close" onclick="this.parentElement.remove()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {toast.style.animation = setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 400);
    }, 4000);
}