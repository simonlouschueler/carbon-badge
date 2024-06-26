const template = document.createElement('template')
template.innerHTML = `

<style>
.badgeContainer {
	height: 128px;
	width: 128px;
	
	/* Green */
	--green: oklch(88.46% 0.191 162.99);
	/* Creme */
	--creme: oklch(90.83% 0.041 94.73);
	/* Blue */
	--blue: oklch(27.68% 0.171 267.17);
	
	/* Dark Gray */
	--dark-gray: oklch(30% 0 0);
	/* White */
	--white: oklch(100% 0 0);
	
	--background: var(--green);
	--foreground: var(--dark-gray);
	
	--mix: color-mix(in oklab, var(--background) 60%, var(--foreground) 40%);
}
.badge {
	background: var(--background);
	clip-path: path(
		"M61.0247 1.86211C61.6881 0.90097 62.0197 0.420399 62.4343 0.251582C62.797 0.103909 63.203 0.103909 63.5657 0.251582C63.9803 0.420399 64.3119 0.900971 64.9753 1.86212L67.2805 5.20235C67.8282 5.99594 68.102 6.39273 68.4594 6.56514C68.773 6.71647 69.1295 6.75396 69.4678 6.67117C69.8532 6.57684 70.2036 6.24568 70.9043 5.58335L73.853 2.79641C74.7017 1.99423 75.126 1.59314 75.5667 1.51424C75.9521 1.44522 76.3493 1.52967 76.6733 1.74954C77.0437 2.00089 77.2682 2.53994 77.7171 3.61803L79.2762 7.36226C79.647 8.25264 79.8323 8.69782 80.1461 8.94081C80.4215 9.15407 80.7625 9.26486 81.1106 9.25415C81.5073 9.24196 81.9189 8.99072 82.7422 8.48825L86.2048 6.37481C87.2015 5.76646 87.6999 5.46228 88.1473 5.4766C88.5386 5.48913 88.9096 5.65419 89.1809 5.93653C89.491 6.25929 89.5987 6.83313 89.814 7.98082L90.5625 11.9703C90.7402 12.9177 90.8291 13.3914 91.0854 13.6941C91.3104 13.9598 91.6208 14.139 91.9634 14.201C92.3538 14.2715 92.8084 14.1116 93.7177 13.7917L97.5471 12.4447C98.6486 12.0572 99.1994 11.8635 99.634 11.9706C100.014 12.0644 100.343 12.303 100.549 12.6357C100.785 13.0159 100.771 13.5996 100.743 14.767L100.644 18.8226C100.621 19.7863 100.609 20.2682 100.797 20.6177C100.962 20.9245 101.228 21.1643 101.55 21.2962C101.917 21.4465 102.395 21.3847 103.351 21.261L107.376 20.7405C108.533 20.5908 109.112 20.5159 109.515 20.7111C109.867 20.8819 110.139 21.1836 110.272 21.5518C110.424 21.9728 110.289 22.5407 110.018 23.6764L109.079 27.624C108.856 28.562 108.744 29.031 108.855 29.4119C108.952 29.7462 109.163 30.0363 109.451 30.2322C109.779 30.4555 110.259 30.4943 111.221 30.5718L115.264 30.8981C116.428 30.9921 117.01 31.039 117.363 31.3137C117.673 31.5539 117.876 31.9055 117.929 32.2934C117.99 32.7368 117.74 33.2643 117.239 34.3193L115.501 37.9833C115.087 38.8542 114.881 39.2896 114.91 39.6852C114.936 40.0324 115.082 40.3599 115.322 40.6114C115.597 40.898 116.058 41.036 116.982 41.3118L120.872 42.4738C121.991 42.8079 122.55 42.975 122.839 43.3171C123.091 43.6164 123.217 44.0025 123.188 44.393C123.156 44.8394 122.801 45.3032 122.092 46.2308L119.628 49.4551C119.043 50.2212 118.75 50.6042 118.696 50.9974C118.649 51.3424 118.724 51.6931 118.907 51.9892C119.116 52.3266 119.539 52.5575 120.386 53.0193L123.948 54.963C124.973 55.5222 125.486 55.8018 125.697 56.1964C125.881 56.5416 125.924 56.9453 125.815 57.3214C125.691 57.7513 125.247 58.1314 124.361 58.8915L121.281 61.5335C120.549 62.1612 120.183 62.4751 120.049 62.8485C119.932 63.1763 119.932 63.5348 120.049 63.8625C120.184 64.2359 120.55 64.5497 121.282 65.1772L124.36 67.8162C125.246 68.5762 125.69 68.9563 125.814 69.3862C125.923 69.7623 125.881 70.1661 125.696 70.5114C125.485 70.9061 124.972 71.1857 123.947 71.7451L120.386 73.6883C119.539 74.1501 119.116 74.381 118.907 74.7184C118.724 75.0145 118.649 75.3652 118.696 75.7102C118.75 76.1033 119.043 76.4864 119.628 77.2525L122.092 80.4768C122.801 81.4044 123.156 81.8682 123.188 82.3146C123.217 82.7051 123.091 83.0912 122.839 83.3905C122.55 83.7326 121.991 83.8997 120.872 84.2338L116.982 85.3958C116.058 85.6716 115.597 85.8096 115.322 86.0961C115.082 86.3477 114.936 86.6751 114.91 87.0224C114.881 87.418 115.087 87.8534 115.501 88.7243L117.239 92.3883C117.74 93.4433 117.99 93.9707 117.929 94.4142C117.876 94.8021 117.673 95.1537 117.363 95.3939C117.01 95.6685 116.428 95.7155 115.264 95.8094L111.22 96.1358C110.259 96.2133 109.779 96.2521 109.451 96.4753C109.163 96.6713 108.952 96.9613 108.855 97.2956C108.744 97.6765 108.855 98.1455 109.079 99.0834L110.018 103.034C110.289 104.17 110.424 104.738 110.272 105.159C110.139 105.527 109.867 105.829 109.515 106C109.112 106.195 108.533 106.12 107.375 105.969L103.352 105.448C102.396 105.324 101.918 105.262 101.551 105.412C101.228 105.544 100.962 105.784 100.797 106.09C100.609 106.44 100.621 106.922 100.644 107.886L100.743 111.941C100.771 113.108 100.785 113.692 100.549 114.072C100.343 114.405 100.014 114.643 99.634 114.737C99.1994 114.844 98.6486 114.65 97.5471 114.263L93.7177 112.916C92.8084 112.596 92.3538 112.436 91.9634 112.507C91.6208 112.569 91.3104 112.748 91.0854 113.013C90.8291 113.316 90.7402 113.79 90.5625 114.737L89.814 118.727C89.5987 119.874 89.491 120.448 89.1809 120.771C88.9096 121.053 88.5386 121.218 88.1473 121.231C87.6999 121.245 87.2015 120.941 86.2048 120.333L82.7422 118.219C81.9189 117.717 81.5073 117.466 81.1106 117.453C80.7625 117.443 80.4215 117.554 80.1461 117.767C79.8323 118.01 79.647 118.455 79.2762 119.345L77.7171 123.09C77.2682 124.168 77.0437 124.707 76.6733 124.958C76.3493 125.178 75.9521 125.262 75.5667 125.193C75.126 125.114 74.7017 124.713 73.8529 123.911L70.9043 121.124C70.2036 120.462 69.8532 120.131 69.4678 120.036C69.1295 119.954 68.773 119.991 68.4594 120.142C68.102 120.315 67.8282 120.712 67.2805 121.505L64.9753 124.845C64.3119 125.807 63.9803 126.287 63.5657 126.456C63.203 126.604 62.797 126.604 62.4343 126.456C62.0197 126.287 61.6881 125.807 61.0247 124.845L58.7195 121.505C58.1718 120.712 57.898 120.315 57.5406 120.142C57.227 119.991 56.8705 119.954 56.5322 120.036C56.1468 120.131 55.7964 120.462 55.0957 121.124L52.147 123.911C51.2983 124.713 50.874 125.114 50.4333 125.193C50.0479 125.262 49.6507 125.178 49.3267 124.958C48.9563 124.707 48.7318 124.168 48.2829 123.09L46.7236 119.345C46.3529 118.455 46.1675 118.009 45.8538 117.767C45.5785 117.553 45.2375 117.442 44.8894 117.453C44.4928 117.465 44.0812 117.716 43.258 118.219L39.7923 120.333C38.7954 120.941 38.2969 121.245 37.8494 121.231C37.458 121.218 37.0871 121.053 36.8159 120.771C36.5058 120.448 36.3983 119.874 36.1834 118.726L35.4367 114.738C35.2593 113.791 35.1705 113.317 34.9142 113.014C34.6893 112.748 34.3789 112.569 34.0362 112.507C33.6457 112.436 33.1909 112.596 32.2813 112.916L28.4529 114.263C27.3514 114.65 26.8006 114.844 26.366 114.737C25.9858 114.643 25.6574 114.405 25.4508 114.072C25.2147 113.692 25.2289 113.108 25.2572 111.941L25.3557 107.886C25.3791 106.922 25.3908 106.44 25.203 106.09C25.0382 105.784 24.7718 105.544 24.4494 105.412C24.0822 105.262 23.604 105.324 22.6477 105.448L18.6252 105.969C17.4672 106.12 16.8882 106.195 16.4853 106C16.1329 105.829 15.8612 105.527 15.7283 105.159C15.5763 104.738 15.7114 104.17 15.9817 103.034L16.9215 99.0835C17.1446 98.1455 17.2562 97.6765 17.1452 97.2956C17.0477 96.9613 16.837 96.6713 16.5491 96.4754C16.2212 96.2521 15.7406 96.2134 14.7796 96.1358L10.7335 95.8094C9.5692 95.7155 8.98705 95.6686 8.63353 95.3938C8.32428 95.1535 8.12129 94.8018 8.06791 94.4138C8.00689 93.9703 8.25745 93.4427 8.75857 92.3876L10.4982 88.7247C10.9118 87.8537 11.1187 87.4182 11.0894 87.0225C11.0637 86.6752 10.918 86.3477 10.6773 86.0961C10.403 85.8094 9.94101 85.6714 9.0171 85.3955L5.12756 84.2338C4.00892 83.8997 3.44961 83.7326 3.16106 83.3905C2.90866 83.0912 2.78327 82.7051 2.81168 82.3146C2.84416 81.8682 3.19861 81.4044 3.90752 80.4768L6.37174 77.2525C6.95722 76.4864 7.24995 76.1033 7.30351 75.7102C7.35051 75.3652 7.276 75.0145 7.09274 74.7184C6.88396 74.381 6.46075 74.1501 5.61435 73.6883L2.0527 71.7451C1.02755 71.1857 0.514979 70.9061 0.303792 70.5114C0.119054 70.1661 0.0766521 69.7623 0.185643 69.3862C0.310239 68.9563 0.753541 68.5762 1.64015 67.8162L4.71838 65.1772C5.45041 64.5497 5.81643 64.2359 5.95058 63.8625C6.06833 63.5348 6.06837 63.1763 5.95072 62.8485C5.81667 62.4751 5.45074 62.1612 4.71889 61.5335L1.63875 58.8915C0.752579 58.1314 0.309496 57.7513 0.185002 57.3214C0.0760992 56.9453 0.11855 56.5416 0.303289 56.1964C0.514477 55.8018 1.02692 55.5222 2.0518 54.963L5.61435 53.0193C6.46075 52.5575 6.88396 52.3266 7.09274 51.9892C7.276 51.6931 7.35051 51.3424 7.30351 50.9974C7.24995 50.6042 6.95722 50.2212 6.37174 49.4551L3.90752 46.2308C3.19861 45.3032 2.84416 44.8394 2.81168 44.393C2.78327 44.0025 2.90866 43.6164 3.16106 43.3171C3.44961 42.975 4.00892 42.8079 5.12756 42.4738L9.0171 41.3121C9.94101 41.0361 10.403 40.8982 10.6773 40.6115C10.918 40.3599 11.0637 40.0323 11.0894 39.685C11.1187 39.2893 10.9118 38.8538 10.4982 37.9829L8.75857 34.32C8.25745 33.2648 8.00689 32.7373 8.06791 32.2937C8.12129 31.9057 8.32429 31.554 8.63353 31.3137C8.98705 31.039 9.5692 30.9921 10.7335 30.8981L14.7794 30.5718C15.7405 30.4942 16.221 30.4555 16.549 30.2322C16.8369 30.0362 17.0476 29.7462 17.145 29.4119C17.256 29.0309 17.1444 28.5619 16.9212 27.6239L15.9817 23.6764C15.7114 22.5407 15.5763 21.9728 15.7282 21.5518C15.8611 21.1836 16.1326 20.8819 16.4849 20.7111C16.8877 20.5159 17.4666 20.5908 18.6243 20.7405L22.6486 21.261C23.6046 21.3847 24.0826 21.4465 24.4498 21.2962C24.772 21.1643 25.0384 20.9245 25.2031 20.6177C25.3908 20.2682 25.3791 19.7863 25.3557 18.8226L25.2572 14.7669C25.2289 13.5996 25.2147 13.0159 25.4508 12.6357C25.6574 12.303 25.9858 12.0644 26.366 11.9706C26.8006 11.8635 27.3514 12.0572 28.4529 12.4447L32.2813 13.7914C33.1909 14.1114 33.6457 14.2713 34.0362 14.2007C34.3789 14.1387 34.6893 13.9595 34.9142 13.6936C35.1705 13.3907 35.2593 12.9169 35.4367 11.9691L36.1834 7.98166C36.3983 6.83372 36.5058 6.25975 36.8159 5.93686C37.0871 5.65441 37.458 5.48924 37.8494 5.47661C38.2969 5.46218 38.7954 5.76631 39.7923 6.37457L43.258 8.48897C44.0812 8.99121 44.4928 9.24233 44.8894 9.25447C45.2375 9.26512 45.5785 9.15432 45.8538 8.94106C46.1675 8.69809 46.3529 8.25298 46.7236 7.36276L48.2829 3.61804C48.7318 2.53994 48.9563 2.0009 49.3267 1.74954C49.6507 1.52967 50.0479 1.44522 50.4333 1.51424C50.874 1.59314 51.2983 1.99423 52.147 2.79641L55.0957 5.58335C55.7964 6.24568 56.1468 6.57684 56.5322 6.67117C56.8705 6.75396 57.227 6.71647 57.5406 6.56514C57.898 6.39273 58.1718 5.99594 58.7195 5.20236L61.0247 1.86211Z"
	);
	color: var(--foreground);
	font-size: 0.8rem;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
	height: 128px;
	width: 128px;
	position: relative;
	transition: 0.5s ease-out transform;
	opacity: 1;
}
.badge #front {
	position: absolute;
	inset: 0;
	display: grid;
	align-items: center;
	justify-items: center;
	height: 100%;
	opacity: 1;
}
#front.noHover {
	animation: turnBack 0.5s ease-out forwards;
}
.badgeContainer:hover .badge #front {
	animation: turnFront 0.5s ease-out forwards;
}

.badge #back {
	position: absolute;
	inset: 0;
	display: grid;
	align-items: center;
	justify-items: center;
	height: 100%;
	opacity: 0;
	transform: scaleX(-1);
}
#back.noHover {
	animation: turnFront 0.5s ease-out forwards;
}
.badgeContainer:hover .badge #back {
	animation: turnBack 0.5s ease-out forwards;
}

.badgeContainer:hover .badge {
	transform: rotate3d(0, 1, 0, 180deg);
}
.badge::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	box-shadow: inset 4px 4px 8px 6px rgba(255, 255, 255, 0.4),
		inset -8px -8px 10px 0px rgba(0, 0, 0, 0.4);
	border-radius: 100%;

	transition: 0.5s ease-out;
}
.badgeContainer:hover .badge::before {
	box-shadow: inset -4px 4px 8px 6px rgba(255, 255, 255, 0.4),
		inset 8px -8px 10px 0px rgba(0, 0, 0, 0.4);
}

.badge * {
	grid-column: 1;
	grid-row: 1;
}

.badge .textLayer {
	overflow: visible;
	text-align: center;
	font-weight: 600;
	letter-spacing: 0.05rem;
	z-index: 10;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	user-select: none;
}
.badge .textLayer.top {
	padding-bottom: 45px;
}
.badge .textLayer.bottom {
	padding-top: 45px;
}

@keyframes turnFront {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}
@keyframes turnBack {
	0% {
		opacity: 0;
	}
	25% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

.badge #back .credit {
	/* padding-top: 41px; */
	color: var(--mix);
	font-size: 0.5rem;
	letter-spacing: 0.025rem;
}

.middleText {
	font-family: "badge-grade";
	font-size: 3rem;
	line-height: 1;
	padding-bottom: 0.25rem;
}
.backPrimaryText {
	/* font-size: 0.625rem; */
	font-size: 0.8rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.backPrimaryText span,
.credit a {
	color: var(--mix);
}
p {
	margin: 0;
}

</style>
<div class="badgeContainer">
	<div class="badge">
		<div id="front">
			<span class="middleText">
				A+
			</span>

			<!-- <svg
				class="middleText"
				width="60"
				height="34"
				viewBox="0 0 60 34"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M31.1953 26.9531C31.6484 28.2344 32.0625 29.2188 32.4375 29.9062C32.8281 30.5781 33.2812 31.0703 33.7969 31.3828C34.3125 31.6797 34.9922 31.8984 35.8359 32.0391V33.8438H18.2344V32.0391C19.2969 31.8672 20.0781 31.625 20.5781 31.3125C21.0781 30.9844 21.3281 30.4688 21.3281 29.7656C21.3438 29.0469 21.1406 28.0234 20.7188 26.6953L13.8516 5.50781H14.625L7.94531 26.5312C7.50781 27.9062 7.28906 28.9609 7.28906 29.6953C7.28906 30.4297 7.53906 30.9609 8.03906 31.2891C8.53906 31.6172 9.32812 31.8672 10.4062 32.0391V33.8438H0V32.0391C0.875 31.8828 1.57031 31.6562 2.08594 31.3594C2.61719 31.0469 3.08594 30.5234 3.49219 29.7891C3.89844 29.0391 4.35156 27.9375 4.85156 26.4844L14.2969 0H21.7266L31.1953 26.9531ZM7.61719 22.7578L8.4375 20.3672H23.0391L23.9062 22.7578H7.61719Z" />
				<path
					d="M34.8084 21.6094V17.7891H59.1366V21.6094H34.8084ZM45.0506 31.8516V7.54688H48.8944V31.8516H45.0506Z" />
			</svg> -->

			<svg
				width="90"
				height="45"
				viewBox="0 0 90 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="textLayer top">
				<path
					d="M0.999998 46C0.999998 21.1472 21.1472 1 46 1C70.8528 1 91 21.1472 91 46"
					id="topText" />
				<text
					width="500"
					fill="currentColor"
					style="text-anchor: middle"
					dominant-baseline="middle">
					<textPath xlink:href="#topText" startOffset="50%">
						Website Carbon
					</textPath>
				</text>
			</svg>
			<svg
				width="90"
				height="45"
				viewBox="0 0 90 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="textLayer bottom"
				style="padding-top: 41px">
				<path
					d="M0.999998 -1.07288e-06C0.999998 24.8528 21.1472 45 46 45C70.8528 45 91 24.8528 91 -1.07288e-06"
					id="bottomText" />
				<text
					width="500"
					fill="currentColor"
					style="text-anchor: middle"
					dominant-baseline="middle">
					<textPath
						xlink:href="#bottomText"
						startOffset="50%">
						0.3 gramm
					</textPath>
				</text>
			</svg>
		</div>
		<div id="back">
			<div class="backPrimaryText">
				<p>Cleaner than</p>
				<div style="display: flex">
					<p>99 % of Pages</p>
					<span style="width: 0">*</span>
				</div>
			</div>
			<svg
				width="90"
				height="45"
				viewBox="0 0 90 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="textLayer top credit">
				<path
					d="M0.999998 46C0.999998 21.1472 21.1472 1 46 1C70.8528 1 91 21.1472 91 46"
					id="topText" />
				<text
					width="500"
					fill="currentColor"
					style="text-anchor: middle"
					dominant-baseline="middle">
					<textPath xlink:href="#topText" startOffset="50%">
						websitecarbon.com
					</textPath>
				</text>
			</svg>

			<svg
				width="78"
				height="39"
				viewBox="0 0 78 39"
				fill="none"
				style="overflow: visible; padding-top: 34px"
				class="textLayer credit"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.999999 -4.17233e-07C0.999999 20.9868 18.0132 38 39 38C59.9868 38 77 20.9868 77 -4.17233e-07"
					id="creditTop" />
				<text
					width="500"
					fill="currentColor"
					style="text-anchor: middle"
					dominant-baseline="text-top">
					<textPath xlink:href="#creditTop" startOffset="50%">
						badged
					</textPath>
				</text>
			</svg>

			<svg
				width="90"
				height="45"
				viewBox="0 0 90 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="textLayer bottom credit">
				<path
					d="M0.999998 -1.07288e-06C0.999998 24.8528 21.1472 45 46 45C70.8528 45 91 24.8528 91 -1.07288e-06"
					id="creditBottom" />
				<text
					width="500"
					fill="currentColor"
					style="text-anchor: middle"
					dominant-baseline="middle">
					<textPath
						xlink:href="#creditBottom"
						startOffset="50%">
						by
						<a
							href="https://ericwaetke.com"
							target="_blank">
							Eric
						</a>
						&
						<a href="https://simonlou.com/" target="_blank">
							Simon
						</a>
					</textPath>
				</text>
			</svg>
		</div>
	</div>
</div>
`

class CarbonBadge extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })
		let clone = template.content.cloneNode(true)
		shadowRoot.appendChild(clone)

		const front = shadowRoot.getElementById("front")
		const back = shadowRoot.getElementById("back")

		// add animation to the front and back of the badge, so it doesnt animate on page load, only on hover
		// front.style.animation = "turnBack 0.5s ease-out forwards"
		// back.style.animation = "turnFront 0.5s ease-out forwards"
		front.addEventListener("animationend", () => {
			front.classList.add("noHover")
		})
		back.addEventListener("animationend", () => {
			back.classList.add("noHover")
		})

		const font = document.createElement("link");
		font.href = "./fonts/badge.css";
		font.rel = "stylesheet"
		document.head.appendChild(font);
	}

	static get observedAttributes() {
		return ['background', 'foreground'];
	}

	/**
	 * Function to handle the attribute changes
	 * @param {string} name - name of the attribute
	 * @param {string} oldValue - old value of the attribute
	 * @param {string} newValue - new value of the attribute
	 * @returns {void}
	 * @memberof CarbonBadge
	 * @example
	 * attributeChangedCallback(name, oldValue, newValue)
	 * attributeChangedCallback('background', 'green', 'blue')
	 * // Attribute background has changed to blue from green
	 * attributeChangedCallback('foreground', 'black', 'white')
	 * // Attribute foreground has changed to white from black
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed to ${newValue} from ${oldValue}`);
		if (name === 'background') {
			this.updateStyle(newValue, "#fff")
		}
		// this.updateStyle()
	}

	/**
	 * Function to update the style of the badge
	 * @param {string} background - background color variable of the badge
	 * @param {string} foreground - foreground color variable of the badge 
	 */
	updateStyle(background, foreground) {
		const badgeContainer = new CSSStyleSheet()
		badgeContainer.replaceSync(`
		.badgeContainer {
			height: 128px;
			width: 128px;
			
			/* Green */
			--green: oklch(88.46% 0.191 162.99);
			/* Creme */
			--creme: oklch(90.83% 0.041 94.73);
			/* Blue */
			--blue: oklch(27.68% 0.171 267.17);
			
			/* Dark Gray */
			--dark-gray: oklch(30% 0 0);
			/* White */
			--white: oklch(100% 0 0);
			
			--background: ${background || 'var(--green)'};
			--foreground: ${foreground || 'var(--dark-gray)'};
			
			--mix: color-mix(in oklab, var(--background) 60%, var(--foreground) 40%);
		}
		`)
		this.shadowRoot.adoptedStyleSheets = [badgeContainer];
	}
}

customElements.define('carbon-badge', CarbonBadge)