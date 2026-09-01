// Shared Navigation and Header/Footer for all pages
// This file reduces code duplication across all pages

// Load common CSS
const commonStyles = `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f8f9fa;
            color: #222;
        }

        /* Top Info Bar */
        .top-info-bar {
            background: #1a3a52;
            color: white;
            padding: 12px 20px;
            font-size: 13px;
            display: flex;
            justify-content: flex-end;
            gap: 40px;
            flex-wrap: wrap;
        }

        .top-info-bar a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .top-info-bar a:hover {
            color: #00bcd4;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Header/Banner Section */
        .header-section {
            background: white;
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            gap: 30px;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-shrink: 0;
        }

        .logo {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #1a3a52 0%, #2c5aa0 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            font-weight: 700;
            color: white;
            flex-shrink: 0;
        }

        .firm-info h1 {
            font-size: 28px;
            color: #1a3a52;
            margin-bottom: 5px;
            font-weight: 700;
        }

        .firm-info p {
            font-size: 14px;
            color: #666;
            font-weight: 300;
        }

        /* Navigation Menu */
        .nav-wrapper {
            background: transparent;
            padding: 0;
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .navbar {
            max-width: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center; /* Force all nav items to align on the same baseline */
            list-style: none;
            gap: 0;
        }

        .nav-item {
            position: relative;
            display: flex;
            align-items: center;
        }

        /* Universal style normalizing both <a> links and <button> dropdown toggles */
        
        .nav-link,
        a.nav-link,
        button.nav-link,
        .nav-link:link,
        .nav-link:visited {
            display: inline-flex !important;
            align-items: center !important;
            padding: 16px 20px !important;
            color: #1a3a52 !important;
            text-decoration: none !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            font-size: 14px !important;
            font-weight: 500 !important; /* Explicitly sets exact medium weight for all tags */
            -webkit-font-smoothing: antialiased; /* Normalizes font thickness across Chrome/Safari */
            -moz-osx-font-smoothing: grayscale;
            line-height: 1 !important;
            transition: background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;
            border: none;
            background: none;
            outline: none;
            vertical-align: middle;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            box-sizing: border-box;
        }

        .nav-link:hover,
        a.nav-link:hover,
        button.nav-link:hover {
            background-color: #f0f0f0 !important;
            color: #2c5aa0 !important;
        }

        /* Dropdown Menu */
        .dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            border-radius: 0 0 4px 4px;
            overflow: hidden;
            border-top: 2px solid #2c5aa0;
        }

        .dropdown.show {
            display: block;
            animation: slideDown 0.3s ease-out;
        }

        .dropdown-item {
            display: block;
            padding: 12px 20px;
            color: #333;
            text-decoration: none;
            font-size: 13px;
            font-family: inherit;
            transition: background-color 0.3s ease;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
        }

        .dropdown-item:hover {
            background-color: #f0f0f0;
            color: #2c5aa0;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Footer */
        .footer {
            background: #1a3a52;
            color: white;
            text-align: center;
            padding: 40px 20px;
            font-size: 13px;
            margin-top: 60px;
        }

        .footer p {
            margin: 8px 0;
        }

        @media (max-width: 768px) {
            /* Compact Info Bar - Keeps all details visible in a clean 2x2 grid */
            .top-info-bar {
                padding: 8px 12px;
                font-size: 11px;
                justify-content: space-between;
                gap: 6px 12px;
            }

            .info-item {
                gap: 5px;
            }

            /* Compact Main Header Section */
            .header-section {
                padding: 12px 15px;
                flex-direction: row;
                align-items: center;
                gap: 12px;
            }

            .logo-section {
                gap: 10px;
            }

        .logo {
            height: 60px;          /* Fixed clean height */
            width: auto;           /* Width adjusts automatically to prevent distortion */
            max-width: 140px;      /* Keeps rectangular logos from taking over the header */
            object-fit: contain;
            background: transparent;
            border-radius: 0;
            flex-shrink: 0;
            display: block;
        }

        /* Mobile responsive adjustment */
        @media (max-width: 768px) {
            .logo {
                height: 40px;      /* Scaled down height for phone screens */
                width: auto;
                max-width: 90px;
            }
        }

            .firm-info h1 {
                font-size: 18px;
                margin-bottom: 2px;
            }

            .firm-info p {
                font-size: 11px;
            }

            /* Touch-Friendly Horizontal Swipe Navigation */
            .nav-wrapper {
                width: 100%;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none; /* Hide scrollbar for Firefox */
                background: #f0f4f8;
                border-top: 1px solid #e2e8f0;
                border-bottom: 1px solid #e2e8f0;
            }

            .nav-wrapper::-webkit-scrollbar {
                display: none; /* Hide scrollbar for Chrome/Safari */
            }

            .navbar {
                display: flex;
                flex-wrap: nowrap; /* Keeps all links strictly on 1 row */
                width: max-content;
                padding: 0 5px;
            }

            .nav-link,
            a.nav-link,
            button.nav-link {
                padding: 12px 14px !important;
                font-size: 13px !important;
                white-space: nowrap; /* Prevents awkward text wrapping */
            }

            /* Mobile Dropdown adjustment */
            .dropdown {
                position: fixed;
                top: auto;
                left: 5% !important;
                width: 90% !important;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }
        }
    </style>
`;

// HTML Template for Header and Navigation
const headerHTML = `
    <!-- Top Info Bar -->
    <div class="top-info-bar">
        <div class="info-item">
            <span>📞</span>
            <a href="tel:+91-0522-2XXX-XXXX">+91-0522-2XXX-XXXX</a>
        </div>
        <div class="info-item">
            <span>✉️</span>
            <a href="mailto:info@kishoreckishore.com">info@kishoreckishore.com</a>
        </div>
        <div class="info-item">
            <span>📍</span>
            <span>C-7, Sector 'E' (New), Aliganj, Lucknow</span>
        </div>
    </div>

    <!-- Header Section with Logo and Navigation -->
    <div class="header-section">
        <div class="logo-section">
            <img src="CA_India_Logo.jpg" alt="Kishore & Kishore Logo" class="logo">
            <div class="firm-info">
                <h1>Kishore & Kishore</h1>
                <p>Chartered Accountants</p>
            </div>
        </div>

        <!-- Navigation Menu -->
        <div class="nav-wrapper">
            <ul class="navbar">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <button class="nav-link" onclick="toggleDropdown(event, 'about-menu')">About Us</button>
                    <div class="dropdown" id="about-menu">
                        <a class="dropdown-item" href="firm-overview.html">Firm Overview</a>
                        <a class="dropdown-item" href="history-mission.html">History & Mission</a>
                        <a class="dropdown-item" href="our-values.html">Our Values</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="team.html">Team</a>
                </li>
                <li class="nav-item">
                    <button class="nav-link" onclick="toggleDropdown(event, 'services-menu')">Services</button>
                    <div class="dropdown" id="services-menu">
                        <a class="dropdown-item" href="audit-assurance.html">Audit & Assurance</a>
                        <a class="dropdown-item" href="tax-advisory.html">Tax Advisory</a>
                        <a class="dropdown-item" href="corporate-advisory.html">Corporate Advisory</a>
                        <a class="dropdown-item" href="accounting-services.html">Accounting Services</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="clientele.html">Clientele</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact-us.html">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
`;

// HTML Template for Footer
const footerHTML = `
    <!-- Footer -->
    <div class="footer">
        <p>© 2026 Kishore & Kishore Chartered Accountants. All Rights Reserved.</p>
        <p style="margin-top: 10px; font-size: 12px;">C-7, Sector 'E' (New), Aliganj, Lucknow, Uttar Pradesh, India</p>
    </div>
`;

// JavaScript Functions
function toggleDropdown(event, menuId) {
    event.preventDefault();
    const menu = document.getElementById(menuId);
    
    // Close all other dropdowns
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown.id !== menuId) {
            dropdown.classList.remove('show');
        }
    });
    
    // Toggle current dropdown
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = event.target.closest('.nav-wrapper');
    if (!isClickInsideNav) {
        const dropdowns = document.querySelectorAll('.dropdown.show');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

// Function to load common header and footer
function loadCommonComponents() {
    // Insert styles into head
    const head = document.head;
    const styleElement = document.createElement('div');
    styleElement.innerHTML = commonStyles;
    head.appendChild(styleElement);
    
    // Insert header at the beginning of body
    const body = document.body;
    const headerElement = document.createElement('div');
    headerElement.innerHTML = headerHTML;
    body.insertBefore(headerElement, body.firstChild);
    
    // Insert footer at the end of body
    const footerElement = document.createElement('div');
    footerElement.innerHTML = footerHTML;
    body.appendChild(footerElement);
}

// Auto-load on page load
document.addEventListener('DOMContentLoaded', loadCommonComponents);
