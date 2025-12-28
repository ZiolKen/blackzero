// donet.js - Xử lý hiển thị danh sách người ủng hộ
class DonetSupporters {
    constructor() {
        this.supporters = [
            {
                id: 1,
                name: "binhbum",
                amount: 920000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7BEvLlT4cGMYBHTOxzPw4wV_3UJ5-DKYYBbDvBq3n-xDgmiyYSxL7Yi9EUuCAfVEpWZVjyfqMIEFG2Yuhv8WkAXAQO_HjPNjJqMRJWkIpCcNiG-PrVNsNRNLW9fNHwAU2o0bE1AzVeSk3AYl6v_N9lXd1EyLXenNDqsOQZneeyJHWNk-wy4WiTViN/s731/1717388034110.jpg",
                position: 1,
                coffeeCount: 184 // 920,000 / 5,000 = 184 cốc cafe
            },
            {
                id: 2,
                name: "Minh Quang",
                amount: 250000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXMWtXSCVrJahk-FdiCGSQnfIs_qMofuGCj4vj0iLL5m2hqOenNhCCTIUqYvMsnsQv78m19539bWKPLFgB9yfoditC_kymuRD5pQYXu_3tFP2zk9afBCkoY5IYcWk0WKK9r1RE9whozIEdnoWoz3H1ds8kuujnj6HwxulpsAtYIMfaL47uWfPdOEb_/s736/FB_IMG_1718503028383.jpg",
                position: 2,
                coffeeCount: 50
            },
            {
                id: 3,
                name: "Chill man",
                amount: 50000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKeiOCtjnuask6Na3cSPPCUyT_XWU7jNWrCIz_ajDvIPRHzyNA7cj2XW7WQkfi1uS-Z4KB-1NKsmky-0sddKhAY2xkY2JogUwzsQZdMVLBFH98SBGG9N8JJIFZProBXfmzmCPEQQhfF8_asj4i5tvkXdAv68t9Q0wEqGyigKj3c5v3AtJBTSkz3_vv/s410/1719229224974.jpg",
                position: 3,
                coffeeCount: 10
            },
            {
                id: 4,
                name: "Nguyễn Minh",
                amount: 40000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSdas06b82IX1n-HZpNx42Ka7TUMVlyiulkzveGNfQoOm_bqwlD3tJHxYpiAvZWwxnob4xDP4GGmsRPIpmGWN7Vx34oVjPdTEJ2YfDbtY7SUx67JXimKBQ3rsh8Vbuje6RTzJr2jIdSGlWcaGBWxxQvOMGDj1aq12wYckISCV7XWB7_bo39KQJ3upomt0/s960/received_2172383483096181.jpeg",
                position: 4,
                coffeeCount: 8
            },
            {
                id: 5,
                name: "Nguyễn Linh",
                amount: 30000,
                avatar: "https://via.placeholder.com/50/2d6ae3/ffffff?text=NL",
                position: 5,
                coffeeCount: 6
            },
            {
                id: 6,
                name: "Phan Toàn",
                amount: 45000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTLeA42z82IlP44H4ejh7YlS7DNZ3iRMxNzAU3sWYdGdyyb9XnimqwObicUEcjhd1v2QdPnSUUtooK4cAhlhv5amlrEpFvQUvWeUntPWjTeIfZuoM3aGrjW5B4VDsg29ZG9xrfkxKe83iiye8RmX_qZqRctwRW7x2aC5EMpiR27XYSuYr-OAGryhbRQns/s562/FB_IMG_1715995593761.jpg",
                position: 6,
                coffeeCount: 9
            },
            {
                id: 7,
                name: "Thế hải",
                amount: 20000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlSdhyNcwuskDBhRlPoLgwOPrexfkNdG22JgX2hVNL12demn4807DNSDT8LWrsNZK9lZ-A40hlRTgwsI22PKrGXTsRKkWLaVjfY3oqP1SzjLB60bpEWLTq0bwcLzwXhppu8D2zaHzLHsviTIlEJ8j0mlFVmcgZnHyUu06VHrwpYG5JrG210saoVC3w3QI/s1080/FB_IMG_1716037109865.jpg",
                position: 7,
                coffeeCount: 4
            },
            {
                id: 8,
                name: "TuấnMP",
                amount: 10000,
                avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiku1LrijtMFlfayL4glMqiNJ81GIZYL4Qn56lmA-d1WjiWv2Pp7ft7LMG82xALW59zezdL5wfJa11CatcRXWFcIkB64Pk7ZZyXnnHsQqQzLCRRRpeb8xH7vLgRkzLWh1J0p5NnkSRLTiKQvGu1u6_A8Onw5kXKQbT5VtUYl9LjSlAbLfKWEbYIbXW_/s1075/1718503815927.jpg",
                position: 8,
                coffeeCount: 2
            }
        ];
        this.initialized = false;
        this.coffeePrice = 5000; // Giá 1 cốc cafe: 5,000đ
    }

    init() {
        if (this.initialized) return;
        
        console.log("Initializing Donet Supporters...");
        this.setupDonetListeners();
        this.initialized = true;
    }

    setupDonetListeners() {
        // Lắng nghe sự kiện khi chọn category Donet
        $(document).on('categoryFiltered', (event, category) => {
            if (category === 'Donet') {
                this.displayDonetPage();
            }
        });

        // Xử lý khi radio button Donet được chọn
        $('#donet').on('change', () => {
            if ($('#donet').is(':checked')) {
                this.displayDonetPage();
            }
        });
    }

    displayDonetPage() {
        const appList = $('.app-list');
        const loadingMessage = $('#loading-message');
        
        if (!appList.length) return;

        // Hiển thị loading
        loadingMessage.show();
        
        // Xóa nội dung cũ
        appList.empty();
        
        // Đợi một chút để tạo hiệu ứng
        setTimeout(() => {
            // Tạo HTML cho trang Donet
            const donetHTML = this.createDonetPage();
            appList.html(donetHTML);
            
            // Ẩn loading
            loadingMessage.hide();
            
            // Thêm hiệu ứng
            this.addAnimations();
            
            console.log("Donet page displayed");
        }, 500);
    }

    createDonetPage() {
        // Sắp xếp supporters theo amount giảm dần
        const sortedSupporters = [...this.supporters].sort((a, b) => b.amount - a.amount);
        
        // Tạo HTML cho danh sách supporters
        const supportersListHTML = sortedSupporters.map(supporter => {
            const formattedAmount = this.formatAmountWithCommas(supporter.amount);
            const positionClass = `position-${supporter.position <= 3 ? supporter.position : 'other'}`;
            
            return `
                <li class="supporter-item" data-id="${supporter.id}">
                    <div class="position ${positionClass}">${supporter.position}</div>
                    <img src="${supporter.avatar}" alt="${supporter.name}" class="avatar" />
                    <div class="supporter-info">
                        <div class="supporter-name">${supporter.name}</div>
                        <div class="amount-info">
                            <span class="amount-label">Đã ủng hộ:</span>
                            <span class="amount">${formattedAmount}đ</span>
                        </div>
                        <div class="coffee-info">
                            <i class="coffee-icon fas fa-coffee"></i>
                            <span class="coffee-count">${supporter.coffeeCount} cốc cafe</span>
                        </div>
                    </div>
                </li>
            `;
        }).join('');

        return `
            <div class="supporters-container">
                <div class="container-header">
                    <div class="header-icon">
                        <i class="fas fa-mug-hot"></i>
                    </div>
                    <h3>Coffee Supporters</h3>
                    <p>Những người đã mua cafe ủng hộ cho dự án năm 2024-2025</p>
                    <div class="coffee-price-note">
                        <i class="fas fa-info-circle"></i>
                        Mỗi cốc cafe = 5,000đ
                    </div>
                </div>
                
                <ul class="supporters-list">
                    ${supportersListHTML}
                </ul>
                
                <!-- Nút ủng hộ -->
                <div class="donate-btn-container">
                    <button class="donate-btn" onclick="window.open('https://m.me/tokomikun', '_blank')">
                        <i class="fas fa-mug-hot"></i>
                        Mua cho tôi cốc cafe
                    </button>
                </div>
            </div>
        `;
    }

    formatAmountWithCommas(amount) {
        // Định dạng số với dấu phẩy ngăn cách hàng nghìn
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    addAnimations() {
        // Thêm hiệu ứng khi cuộn trang
        const supporterItems = $('.supporter-item');
        
        supporterItems.each((index, item) => {
            // Thêm hiệu ứng xuất hiện
            $(item).css({
                'opacity': '0',
                'transform': 'translateY(20px)'
            });
            
            setTimeout(() => {
                $(item).css({
                    'transition': 'all 0.5s ease',
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, index * 100);
        });
        
        // Hiệu ứng cho nút
        const donateBtn = $('.donate-btn');
        donateBtn.on('mouseenter', function() {
            $(this).css('transform', 'translateY(-2px)');
        });
        
        donateBtn.on('mouseleave', function() {
            $(this).css('transform', 'translateY(0)');
        });
        
        // Hiệu ứng hover cho supporter items
        supporterItems.hover(
            function() {
                $(this).css({
                    'transform': 'translateY(-3px)',
                    'box-shadow': '0 8px 20px rgba(0, 0, 0, 0.12)',
                    'border-color': '#d2691e',
                    'background': 'white'
                });
                $(this).find('.coffee-icon').addClass('animate-coffee');
            },
            function() {
                $(this).css({
                    'transform': 'translateY(0)',
                    'box-shadow': 'none',
                    'border-color': 'transparent',
                    'background': '#f8f9fa'
                });
                $(this).find('.coffee-icon').removeClass('animate-coffee');
            }
        );
        
        // Hiệu ứng cho icon cafe
        $('.coffee-icon').hover(
            function() {
                $(this).css('transform', 'scale(1.2)');
            },
            function() {
                $(this).css('transform', 'scale(1)');
            }
        );
    }

    addSupporter(name, amount, avatar = null) {
        const coffeeCount = Math.floor(amount / this.coffeePrice);
        const newPosition = this.supporters.length + 1;
        const newSupporter = {
            id: newPosition,
            name: name,
            amount: amount,
            avatar: avatar || `https://via.placeholder.com/50/d2691e/ffffff?text=${name.charAt(0).toUpperCase()}`,
            position: newPosition,
            coffeeCount: coffeeCount
        };
        
        this.supporters.push(newSupporter);
        console.log(`Added new supporter: ${name} (${coffeeCount} cốc cafe)`);
        
        // Sắp xếp lại danh sách
        this.supporters.sort((a, b) => b.amount - a.amount);
        
        // Cập nhật lại position
        this.supporters.forEach((supporter, index) => {
            supporter.position = index + 1;
        });
        
        // Cập nhật giao diện nếu đang hiển thị
        const currentCategory = $('input[name="category"]:checked').val();
        if (currentCategory === 'Donet') {
            this.displayDonetPage();
        }
    }

    getTopSupporters(limit = 5) {
        return [...this.supporters]
            .sort((a, b) => b.amount - a.amount)
            .slice(0, limit);
    }

    getTotalAmount() {
        return this.supporters.reduce((sum, supporter) => sum + supporter.amount, 0);
    }
}

// Khởi tạo Donet Supporters
const donetSupporters = new DonetSupporters();

// Khởi tạo khi DOM sẵn sàng
$(document).ready(function() {
    // Đợi một chút để đảm bảo các script khác đã load
    setTimeout(() => {
        donetSupporters.init();
        
        // Kiểm tra nếu đang ở tab Donet
        if ($('#donet').is(':checked')) {
            donetSupporters.displayDonetPage();
        }
    }, 500);
});

// Thêm CSS động cho Donet page
function addDonetStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Donet Supporters Styles với chủ đề cafe */
        .supporters-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #fff5e6 0%, #fff 100%);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(139, 69, 19, 0.15);
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            border: 2px solid #ffcc99;
        }

        .supporters-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #8b4513, #d2691e, #8b4513);
        }

        /* Header */
        .container-header {
            text-align: center;
            margin-bottom: 30px;
            position: relative;
            padding-bottom: 20px;
        }

        .header-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #8b4513, #d2691e);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: white;
            font-size: 36px;
            box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3);
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .container-header h3 {
            color: #8b4513;
            font-size: 28px;
            font-weight: 800;
            margin: 0 0 10px 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .container-header p {
            color: #a0522d;
            font-size: 16px;
            margin-bottom: 15px;
        }

        .coffee-price-note {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(139, 69, 19, 0.1);
            padding: 8px 16px;
            border-radius: 20px;
            color: #8b4513;
            font-size: 14px;
            font-weight: 500;
        }

        .coffee-price-note i {
            color: #d2691e;
        }

        /* Danh sách */
        .supporters-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .supporter-item {
            display: flex;
            align-items: center;
            padding: 20px;
            margin-bottom: 15px;
            background: white;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            box-shadow: 0 4px 12px rgba(139, 69, 19, 0.08);
        }

        .supporter-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(139, 69, 19, 0.15);
            border-color: #d2691e;
            background: #fffaf0;
        }

        /* Vị trí */
        .position {
            min-width: 45px;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            font-weight: 800;
            font-size: 18px;
            margin-right: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .position-1 {
            background: linear-gradient(135deg, #ffd700, #ffa500);
            color: #8b6500;
            border: 2px solid #ffd700;
        }

        .position-2 {
            background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
            color: #505050;
            border: 2px solid #c0c0c0;
        }

        .position-3 {
            background: linear-gradient(135deg, #cd7f32, #a0522d);
            color: white;
            border: 2px solid #cd7f32;
        }

        .position-other {
            background: linear-gradient(135deg, #f5deb3, #deb887);
            color: #8b4513;
            border: 2px solid #deb887;
        }

        /* Avatar */
        .avatar {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(139, 69, 19, 0.2);
        }

        /* Thông tin */
        .supporter-info {
            flex: 1;
            min-width: 0;
        }

        .supporter-name {
            font-size: 18px;
            font-weight: 700;
            color: #8b4513;
            margin-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .amount-info {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 8px;
        }

        .amount-label {
            font-size: 14px;
            color: #a0522d;
            font-weight: 500;
        }

        .amount {
            font-weight: 800;
            font-size: 20px;
            color: #27ae60;
            background: rgba(39, 174, 96, 0.1);
            padding: 6px 12px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            border: 1px solid rgba(39, 174, 96, 0.3);
        }

        .coffee-info {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 6px 12px;
            background: rgba(210, 105, 30, 0.1);
            border-radius: 8px;
            width: fit-content;
        }

        .coffee-icon {
            color: #8b4513;
            font-size: 18px;
            transition: all 0.3s ease;
        }

        .coffee-icon.animate-coffee {
            animation: coffeeSteam 1.5s ease-in-out;
        }

        @keyframes coffeeSteam {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        .coffee-count {
            font-size: 14px;
            font-weight: 600;
            color: #8b4513;
        }

        /* Nút ủng hộ */
        .donate-btn-container {
            margin-top: 30px;
            text-align: center;
        }

        .donate-btn {
            background: linear-gradient(135deg, #8b4513, #d2691e);
            color: white;
            border: none;
            padding: 20px 35px;
            font-size: 20px;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            min-width: 250px;
            box-shadow: 0 6px 20px rgba(139, 69, 19, 0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .donate-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(139, 69, 19, 0.5);
            background: linear-gradient(135deg, #a0522d, #8b4513);
        }

        .donate-btn:active {
            transform: translateY(0);
        }

        .donate-btn i {
            font-size: 22px;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        /* Responsive */
        @media (max-width: 640px) {
            .supporters-container {
                padding: 20px;
                margin: 0 10px;
            }
            
            .header-icon {
                width: 60px;
                height: 60px;
                font-size: 28px;
            }
            
            .container-header h3 {
                font-size: 24px;
            }
            
            .supporter-item {
                padding: 16px;
                flex-direction: column;
                text-align: center;
            }
            
            .position {
                margin-right: 0;
                margin-bottom: 10px;
                order: -1;
            }
            
            .avatar {
                margin-right: 0;
                margin-bottom: 10px;
                order: -2;
            }
            
            .supporter-info {
                width: 100%;
            }
            
            .amount-info, .coffee-info {
                justify-content: center;
            }
            
            .amount {
                font-size: 18px;
                padding: 5px 10px;
            }
            
            .donate-btn {
                padding: 18px 25px;
                font-size: 18px;
                width: 100%;
                min-width: auto;
            }
        }

        @media (max-width: 480px) {
            .supporter-item {
                flex-direction: column;
            }
            
            .position, .avatar {
                margin-right: 0;
                margin-bottom: 10px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Thêm styles khi tải trang
$(document).ready(function() {
    addDonetStyles();
});

// Thêm hàm global để truy cập từ các file khác
window.donetSupporters = donetSupporters;

// Hàm tiện ích để thêm supporter mới
function addNewSupporter(name, amount, avatar) {
    donetSupporters.addSupporter(name, amount, avatar);
}

// Hàm để lấy top supporters
function getTopSupporters(limit = 5) {
    return donetSupporters.getTopSupporters(limit);
}

// Hàm định dạng số với dấu phẩy
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}