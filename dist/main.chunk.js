(this["webpackJsonpvirtual-background"] = this["webpackJsonpvirtual-background"] || []).push([[0], {

	/***/ 332:
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
		var CssBaseline = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/react/index.js
		var react = __webpack_require__(5);
		var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
		var react_dom = __webpack_require__(40);
		var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
		var makeStyles = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
		var createStyles = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
		var Card = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
		var CardContent = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
		var Typography = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Block.js
		var Block = __webpack_require__(268);
		var Block_default = /*#__PURE__*/__webpack_require__.n(Block);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/BlurOn.js
		var BlurOn = __webpack_require__(269);
		var BlurOn_default = /*#__PURE__*/__webpack_require__.n(BlurOn);

// CONCATENATED MODULE: ./src/shared/helpers/thumbnailHelper.ts
		/**
		 * Returns a thumbnail as a Blob.
		 * @param source The source image or video.
		 * @param originalWidth The original width of the source before sizing.
		 * @param originalHeight The original height of the source before sizing.
		 */
		function getThumbnailBlob(source, originalWidth, originalHeight) {
			const sourceSize = Math.min(originalWidth, originalHeight);
			const horizontalShift = (originalWidth - sourceSize) / 2;
			const verticalShift = (originalHeight - sourceSize) / 2;
			const canvas = document.createElement('canvas');
			canvas.width = 63;
			canvas.height = 63;
			const ctx = canvas.getContext('2d');
			ctx.drawImage(source, horizontalShift, verticalShift, sourceSize, sourceSize, 0, 0, canvas.width, canvas.height);
			return new Promise(resolve => canvas.toBlob(blob => resolve(blob)));
		}

// CONCATENATED MODULE: ./src/shared/hooks/useImageThumbnail.ts
		var useImageThumbnail_s = createSignatureFunctionForTransform();


		/**
		 * Returns an image thumbnail URL and a function to revoke it.
		 */

		function useImageThumbnail(imageUrl) {
			useImageThumbnail_s();

			const [thumbnailUrl, setThumbnailUrl] = Object(react["useState"])();
			Object(react["useEffect"])(() => {
				const image = new Image();
				image.src = imageUrl;

				image.onload = async () => {
					const blob = await getThumbnailBlob(image, image.naturalWidth, image.naturalHeight);
					setThumbnailUrl(URL.createObjectURL(blob));
				};
			}, [imageUrl]);
			return [thumbnailUrl, () => URL.revokeObjectURL(thumbnailUrl)];
		}

		useImageThumbnail_s(useImageThumbnail, "/XYfGJKl5w6emPDp5TJtaHpzT8E=");

		/* harmony default export */
		var hooks_useImageThumbnail = (useImageThumbnail);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js
		var Skeleton = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
		var clsx_m = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
		var Button = __webpack_require__(371);

// EXTERNAL MODULE: ./node_modules/react/jsx-dev-runtime.js
		var jsx_dev_runtime = __webpack_require__(14);

// CONCATENATED MODULE: ./src/shared/components/SelectionButton.tsx
		var _jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\shared\\components\\SelectionButton.tsx",
			SelectionButton_s = createSignatureFunctionForTransform();


		function SelectionButton(props) {
			SelectionButton_s();

			const classes = useStyles();
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Button["a" /* default */], {
				className: Object(clsx_m["a" /* default */])(classes.root, props.active && classes.active),
				disabled: props.disabled,
				onClick: props.onClick,
				children: props.children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 5
			}, this);
		}

		SelectionButton_s(SelectionButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [useStyles];
		});

		_c = SelectionButton;
		const useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				padding: 0,
				minWidth: theme.spacing(7) + 2,
				height: theme.spacing(7) + 2,
				width: theme.spacing(7) + 2,
				marginRight: theme.spacing(1),
				marginBottom: theme.spacing(1),
				border: '2px solid transparent',
				alignItems: 'stretch',
				transitionProperty: 'transform, border-color',
				transitionDuration: `${theme.transitions.duration.shorter}ms`,
				transitionTimingFunction: theme.transitions.easing.easeInOut,
				'&:hover': {
					transform: 'scale(1.125)'
				}
			},
			active: {
				borderColor: theme.palette.primary.main,
				transform: 'scale(1.125)'
			}
		}));
		/* harmony default export */
		var components_SelectionButton = (SelectionButton);

		var _c;

		register(_c, "SelectionButton");
// CONCATENATED MODULE: ./src/shared/components/TumbnailButton.tsx
		var TumbnailButton_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\shared\\components\\TumbnailButton.tsx",
			TumbnailButton_s = createSignatureFunctionForTransform();


		function ThumbnailButton(props) {
			TumbnailButton_s();

			const classes = TumbnailButton_useStyles();
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SelectionButton, {
				active: !!props.thumbnailUrl && props.active,
				disabled: !props.thumbnailUrl,
				onClick: props.onClick,
				children: [props.thumbnailUrl ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("img", {
					className: Object(clsx_m["a" /* default */])(classes.scalableContent, classes.image),
					src: props.thumbnailUrl,
					alt: "",
					onLoad: props.onLoad
				}, void 0, false, {
					fileName: TumbnailButton_jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this) : /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Skeleton["a" /* default */], {
					className: classes.scalableContent,
					variant: "rect"
				}, void 0, false, {
					fileName: TumbnailButton_jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this), props.children]
			}, void 0, true, {
				fileName: TumbnailButton_jsxFileName,
				lineNumber: 18,
				columnNumber: 5
			}, this);
		}

		TumbnailButton_s(ThumbnailButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [TumbnailButton_useStyles];
		});

		TumbnailButton_c = ThumbnailButton;
		const TumbnailButton_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			scalableContent: {
				// Fixes rendering issues with border when scaled
				width: 'calc(100% + 2px)',
				height: 'calc(100% + 2px)',
				margin: -1,
				borderRadius: theme.shape.borderRadius
			},
			image: {
				objectFit: 'cover'
			}
		}));
		/* harmony default export */
		var TumbnailButton = (ThumbnailButton);

		var TumbnailButton_c;

		register(TumbnailButton_c, "ThumbnailButton");
// CONCATENATED MODULE: ./src/shared/components/ImageButton.tsx
		var ImageButton_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\shared\\components\\ImageButton.tsx",
			ImageButton_s = createSignatureFunctionForTransform();


		function ImageButton(props) {
			ImageButton_s();

			const [thumbnailUrl, revokeThumbnailUrl] = hooks_useImageThumbnail(props.imageUrl);
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(TumbnailButton, {
				thumbnailUrl: thumbnailUrl,
				active: props.active,
				onClick: props.onClick,
				onLoad: revokeThumbnailUrl
			}, void 0, false, {
				fileName: ImageButton_jsxFileName,
				lineNumber: 14,
				columnNumber: 5
			}, this);
		}

		ImageButton_s(ImageButton, "fQiE+KO1B3UR3n+x9aD4aQNT+/Y=", false, function () {
			return [hooks_useImageThumbnail];
		});

		ImageButton_c = ImageButton;
		/* harmony default export */
		var components_ImageButton = (ImageButton);

		var ImageButton_c;

		register(ImageButton_c, "ImageButton");
// CONCATENATED MODULE: ./src/shared/components/SelectionIconButton.tsx
		var SelectionIconButton_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\shared\\components\\SelectionIconButton.tsx",
			SelectionIconButton_s = createSignatureFunctionForTransform();


		function SelectionIconButton(props) {
			SelectionIconButton_s();

			const classes = SelectionIconButton_useStyles();
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SelectionButton, {
				active: props.active,
				onClick: props.onClick,
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
					className: classes.root,
					children: props.children
				}, void 0, false, {
					fileName: SelectionIconButton_jsxFileName,
					lineNumber: 15,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: SelectionIconButton_jsxFileName,
				lineNumber: 14,
				columnNumber: 5
			}, this);
		}

		SelectionIconButton_s(SelectionIconButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [SelectionIconButton_useStyles];
		});

		SelectionIconButton_c = SelectionIconButton;
		const SelectionIconButton_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				width: '100%',
				height: '100%',
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: 'rgba(0, 0, 0, 0.23)',
				borderRadius: theme.shape.borderRadius,
				margin: -1,
				boxSizing: 'content-box',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		}));
		/* harmony default export */
		var components_SelectionIconButton = (SelectionIconButton);

		var SelectionIconButton_c;

		register(SelectionIconButton_c, "SelectionIconButton");
// CONCATENATED MODULE: ./src/core/helpers/backgroundHelper.ts
		const backgroundImageUrls = ['architecture-5082700_1280', 'porch-691330_1280', 'saxon-switzerland-539418_1280', 'shibuyasky-4768679_1280'].map(imageName => `/public/backgrounds/${imageName}.jpg`);
// CONCATENATED MODULE: ./src/core/components/BackgroundConfigCard.tsx
		var BackgroundConfigCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\BackgroundConfigCard.tsx",
			BackgroundConfigCard_s = createSignatureFunctionForTransform();


		function BackgroundConfigCard(props) {
			BackgroundConfigCard_s();

			const classes = BackgroundConfigCard_useStyles();
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Card["a" /* default */], {
				className: classes.root,
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CardContent["a" /* default */], {
					children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
						gutterBottom: true,
						variant: "h6",
						component: "h2",
						children: "Background"
					}, void 0, false, {
						fileName: BackgroundConfigCard_jsxFileName,
						lineNumber: 25,
						columnNumber: 9
					}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SelectionIconButton, {
						active: props.config.type === 'none',
						onClick: () => props.onChange({
							type: 'none'
						}),
						children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Block_default.a, {}, void 0, false, {
							fileName: BackgroundConfigCard_jsxFileName,
							lineNumber: 32,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: BackgroundConfigCard_jsxFileName,
						lineNumber: 28,
						columnNumber: 9
					}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SelectionIconButton, {
						active: props.config.type === 'blur',
						onClick: () => props.onChange({
							type: 'blur'
						}),
						children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(BlurOn_default.a, {}, void 0, false, {
							fileName: BackgroundConfigCard_jsxFileName,
							lineNumber: 38,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: BackgroundConfigCard_jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this), backgroundImageUrls.map(imageUrl => /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_ImageButton, {
						imageUrl: imageUrl,
						active: imageUrl === props.config.url,
						onClick: () => props.onChange({
							type: 'image',
							url: imageUrl
						})
					}, imageUrl, false, {
						fileName: BackgroundConfigCard_jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this))]
				}, void 0, true, {
					fileName: BackgroundConfigCard_jsxFileName,
					lineNumber: 24,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: BackgroundConfigCard_jsxFileName,
				lineNumber: 23,
				columnNumber: 5
			}, this);
		}

		BackgroundConfigCard_s(BackgroundConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [BackgroundConfigCard_useStyles];
		});

		BackgroundConfigCard_c = BackgroundConfigCard;
		const BackgroundConfigCard_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				flex: 1
			}
		}));
		/* harmony default export */
		var components_BackgroundConfigCard = (BackgroundConfigCard);

		var BackgroundConfigCard_c;

		register(BackgroundConfigCard_c, "BackgroundConfigCard");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
		var FormControl = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
		var FormControlLabel = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
		var InputLabel = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 1 modules
		var MenuItem = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 28 modules
		var Select = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
		var Slider = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 2 modules
		var Switch = __webpack_require__(385);

// CONCATENATED MODULE: ./src/core/components/PostProcessingConfigCard.tsx
		var PostProcessingConfigCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\PostProcessingConfigCard.tsx",
			PostProcessingConfigCard_s = createSignatureFunctionForTransform();


		function PostProcessingConfigCard(props) {
			PostProcessingConfigCard_s();

			const classes = PostProcessingConfigCard_useStyles();

			function handleSmoothSegmentationMaskChange(event) {
				props.onChange({
					...props.config,
					smoothSegmentationMask: event.target.checked
				});
			}

			function handleSigmaSpaceChange(_event, value) {
				props.onChange({
					...props.config,
					jointBilateralFilter: {
						...props.config.jointBilateralFilter,
						sigmaSpace: value
					}
				});
			}

			function handleSigmaColorChange(_event, value) {
				props.onChange({
					...props.config,
					jointBilateralFilter: {
						...props.config.jointBilateralFilter,
						sigmaColor: value
					}
				});
			}

			function handleCoverageChange(_event, value) {
				props.onChange({
					...props.config,
					coverage: value
				});
			}

			function handleLightWrappingChange(_event, value) {
				props.onChange({
					...props.config,
					lightWrapping: value
				});
			}

			function handleBlendModeChange(event) {
				props.onChange({
					...props.config,
					blendMode: event.target.value
				});
			}

			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Card["a" /* default */], {
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CardContent["a" /* default */], {
					children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
						gutterBottom: true,
						variant: "h6",
						component: "h2",
						children: "Post-processing"
					}, void 0, false, {
						fileName: PostProcessingConfigCard_jsxFileName,
						lineNumber: 81,
						columnNumber: 9
					}, this), props.pipeline === 'webgl2' ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(react_default.a.Fragment, {
						children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							gutterBottom: true,
							children: "Joint bilateral filter"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							variant: "body2",
							children: "Sigma space"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Slider["a" /* default */], {
							value: props.config.jointBilateralFilter.sigmaSpace,
							min: 0,
							max: 10,
							step: 0.1,
							valueLabelDisplay: "auto",
							onChange: handleSigmaSpaceChange
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 88,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							variant: "body2",
							children: "Sigma color"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 96,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Slider["a" /* default */], {
							value: props.config.jointBilateralFilter.sigmaColor,
							min: 0,
							max: 1,
							step: 0.01,
							valueLabelDisplay: "auto",
							onChange: handleSigmaColorChange
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							gutterBottom: true,
							children: "Background"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 105,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							variant: "body2",
							children: "Coverage"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Slider["a" /* default */], {
							value: props.config.coverage,
							min: 0,
							max: 1,
							step: 0.01,
							valueLabelDisplay: "auto",
							onChange: handleCoverageChange
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
							variant: "body2",
							gutterBottom: true,
							children: "Light wrapping"
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 115,
							columnNumber: 13
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
							className: classes.lightWrapping,
							children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControl["a" /* default */], {
								className: classes.formControl,
								variant: "outlined",
								children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(InputLabel["a" /* default */], {
									children: "Blend mode"
								}, void 0, false, {
									fileName: PostProcessingConfigCard_jsxFileName,
									lineNumber: 120,
									columnNumber: 17
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Select["a" /* default */], {
									label: "Blend mode",
									value: props.config.blendMode,
									onChange: handleBlendModeChange,
									children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
										value: "screen",
										children: "Screen"
									}, void 0, false, {
										fileName: PostProcessingConfigCard_jsxFileName,
										lineNumber: 126,
										columnNumber: 19
									}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
										value: "linearDodge",
										children: "Linear dodge"
									}, void 0, false, {
										fileName: PostProcessingConfigCard_jsxFileName,
										lineNumber: 127,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: PostProcessingConfigCard_jsxFileName,
									lineNumber: 121,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: PostProcessingConfigCard_jsxFileName,
								lineNumber: 119,
								columnNumber: 15
							}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Slider["a" /* default */], {
								value: props.config.lightWrapping,
								min: 0,
								max: 1,
								step: 0.01,
								valueLabelDisplay: "auto",
								onChange: handleLightWrappingChange
							}, void 0, false, {
								fileName: PostProcessingConfigCard_jsxFileName,
								lineNumber: 130,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 118,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: PostProcessingConfigCard_jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this) : /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControlLabel["a" /* default */], {
						label: "Smooth segmentation mask",
						control: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Switch["a" /* default */], {
							color: "primary",
							checked: props.config.smoothSegmentationMask,
							onChange: handleSmoothSegmentationMaskChange
						}, void 0, false, {
							fileName: PostProcessingConfigCard_jsxFileName,
							lineNumber: 144,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: PostProcessingConfigCard_jsxFileName,
						lineNumber: 141,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: PostProcessingConfigCard_jsxFileName,
					lineNumber: 80,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: PostProcessingConfigCard_jsxFileName,
				lineNumber: 79,
				columnNumber: 5
			}, this);
		}

		PostProcessingConfigCard_s(PostProcessingConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [PostProcessingConfigCard_useStyles];
		});

		PostProcessingConfigCard_c = PostProcessingConfigCard;
		const PostProcessingConfigCard_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			lightWrapping: {
				display: 'flex',
				alignItems: 'center'
			},
			formControl: {
				marginTop: theme.spacing(2),
				marginBottom: theme.spacing(1),
				marginRight: theme.spacing(2),
				minWidth: 160
			}
		}));
		/* harmony default export */
		var components_PostProcessingConfigCard = (PostProcessingConfigCard);

		var PostProcessingConfigCard_c;

		register(PostProcessingConfigCard_c, "PostProcessingConfigCard");
// CONCATENATED MODULE: ./src/core/components/SegmentationConfigCard.tsx
		var SegmentationConfigCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\SegmentationConfigCard.tsx",
			SegmentationConfigCard_s = createSignatureFunctionForTransform();


		function SegmentationConfigCard(props) {
			SegmentationConfigCard_s();

			const classes = SegmentationConfigCard_useStyles();

			function handleModelChange(event) {
				const model = event.target.value;
				let backend = props.config.backend;
				let inputResolution = props.config.inputResolution;

				if (model === 'meet') {
					backend = 'wasm';

					if (inputResolution === '360p') {
						inputResolution = '144p';
					}
				} else if (model === 'bodyPix') {
					backend = 'webgl';
					inputResolution = '360p';
				}

				let pipeline = props.config.pipeline;

				if (model === 'bodyPix' && pipeline === 'webgl2') {
					pipeline = 'canvas2dCpu';
				}

				props.onChange({
					...props.config,
					model,
					backend,
					inputResolution,
					pipeline
				});
			}

			function handleBackendChange(event) {
				props.onChange({
					...props.config,
					backend: event.target.value
				});
			}

			function handleInputResolutionChange(event) {
				props.onChange({
					...props.config,
					inputResolution: event.target.value
				});
			}

			function handlePipelineChange(event) {
				props.onChange({
					...props.config,
					pipeline: event.target.value
				});
			}

			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Card["a" /* default */], {
				className: classes.root,
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CardContent["a" /* default */], {
					children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
						gutterBottom: true,
						variant: "h6",
						component: "h2",
						children: "Segmentation"
					}, void 0, false, {
						fileName: SegmentationConfigCard_jsxFileName,
						lineNumber: 77,
						columnNumber: 9
					}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
						className: classes.formControls,
						children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControl["a" /* default */], {
							className: classes.formControl,
							variant: "outlined",
							children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(InputLabel["a" /* default */], {
								children: "Model"
							}, void 0, false, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 82,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Select["a" /* default */], {
								label: "Model",
								value: props.config.model,
								onChange: handleModelChange,
								children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "meet",
									children: "Meet"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 88,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "bodyPix",
									children: "BodyPix"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 89,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 83,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: SegmentationConfigCard_jsxFileName,
							lineNumber: 81,
							columnNumber: 11
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControl["a" /* default */], {
							className: classes.formControl,
							variant: "outlined",
							children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(InputLabel["a" /* default */], {
								children: "Backend"
							}, void 0, false, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 93,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Select["a" /* default */], {
								label: "Backend",
								value: props.config.backend,
								onChange: handleBackendChange,
								children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "wasm",
									disabled: props.config.model === 'bodyPix',
									children: "WebAssembly"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "wasmSimd",
									disabled: props.config.model === 'bodyPix' || !props.isSIMDSupported,
									children: "WebAssembly SIMD"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 105,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "webgl",
									disabled: props.config.model === 'meet',
									children: "WebGL"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 113,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: SegmentationConfigCard_jsxFileName,
							lineNumber: 92,
							columnNumber: 11
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControl["a" /* default */], {
							className: classes.formControl,
							variant: "outlined",
							children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(InputLabel["a" /* default */], {
								children: "Input resolution"
							}, void 0, false, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Select["a" /* default */], {
								label: "Input resolution",
								value: props.config.inputResolution,
								onChange: handleInputResolutionChange,
								children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "360p",
									disabled: props.config.model === 'meet',
									children: "360p"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 125,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "144p",
									disabled: props.config.model === 'bodyPix',
									children: "144p"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 128,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "96p",
									disabled: props.config.model === 'bodyPix',
									children: "96p"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 134,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: SegmentationConfigCard_jsxFileName,
							lineNumber: 118,
							columnNumber: 11
						}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(FormControl["a" /* default */], {
							className: classes.formControl,
							variant: "outlined",
							children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(InputLabel["a" /* default */], {
								children: "Pipeline"
							}, void 0, false, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 140,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Select["a" /* default */], {
								label: "Pipeline",
								value: props.config.pipeline,
								onChange: handlePipelineChange,
								children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "webgl2",
									disabled: props.config.model === 'bodyPix',
									children: "WebGL 2"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 146,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(MenuItem["a" /* default */], {
									value: "canvas2dCpu",
									children: "Canvas 2D + CPU"
								}, void 0, false, {
									fileName: SegmentationConfigCard_jsxFileName,
									lineNumber: 152,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: SegmentationConfigCard_jsxFileName,
								lineNumber: 141,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: SegmentationConfigCard_jsxFileName,
							lineNumber: 139,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: SegmentationConfigCard_jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: SegmentationConfigCard_jsxFileName,
					lineNumber: 76,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: SegmentationConfigCard_jsxFileName,
				lineNumber: 75,
				columnNumber: 5
			}, this);
		}

		SegmentationConfigCard_s(SegmentationConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [SegmentationConfigCard_useStyles];
		});

		SegmentationConfigCard_c = SegmentationConfigCard;
		const SegmentationConfigCard_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				[theme.breakpoints.only('md')]: {
					gridColumnStart: 2,
					gridRowStart: 2
				}
			},
			formControls: {
				display: 'flex',
				flexWrap: 'wrap'
			},
			formControl: {
				marginTop: theme.spacing(1),
				marginBottom: theme.spacing(1),
				marginRight: theme.spacing(2),
				minWidth: 200,
				flex: 1
			}
		}));
		/* harmony default export */
		var components_SegmentationConfigCard = (SegmentationConfigCard);

		var SegmentationConfigCard_c;

		register(SegmentationConfigCard_c, "SegmentationConfigCard");
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Videocam.js
		var Videocam = __webpack_require__(271);
		var Videocam_default = /*#__PURE__*/__webpack_require__.n(Videocam);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleOutline.js
		var PlayCircleOutline = __webpack_require__(270);
		var PlayCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PlayCircleOutline);

// CONCATENATED MODULE: ./src/shared/hooks/useVideoThumbnail.ts
		var useVideoThumbnail_s = createSignatureFunctionForTransform();


		/**
		 * Returns a video thumbnail URL and a function to revoke it.
		 */

		function useVideoThumbnail(videoUrl) {
			useVideoThumbnail_s();

			const [thumbnailUrl, setThumbnailUrl] = Object(react["useState"])();
			Object(react["useEffect"])(() => {
				const video = document.createElement('video');
				video.src = videoUrl;

				video.onloadedmetadata = () => {
					video.currentTime = video.duration / 2;
				};

				video.onseeked = async () => {
					const blob = await getThumbnailBlob(video, video.videoWidth, video.videoHeight);
					setThumbnailUrl(URL.createObjectURL(blob));
				};
			}, [videoUrl]);
			return [thumbnailUrl, () => URL.revokeObjectURL(thumbnailUrl)];
		}

		useVideoThumbnail_s(useVideoThumbnail, "/XYfGJKl5w6emPDp5TJtaHpzT8E=");

		/* harmony default export */
		var hooks_useVideoThumbnail = (useVideoThumbnail);
// CONCATENATED MODULE: ./src/shared/components/VideoButton.tsx
		var VideoButton_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\shared\\components\\VideoButton.tsx",
			VideoButton_s = createSignatureFunctionForTransform();


		function VideoButton(props) {
			VideoButton_s();

			const classes = VideoButton_useStyles();
			const [thumbnailUrl, revokeThumbnailUrl] = hooks_useVideoThumbnail(props.videoUrl);
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(TumbnailButton, {
				thumbnailUrl: thumbnailUrl,
				active: props.active,
				onClick: props.onClick,
				onLoad: revokeThumbnailUrl,
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(PlayCircleOutline_default.a, {
					className: classes.icon
				}, void 0, false, {
					fileName: VideoButton_jsxFileName,
					lineNumber: 23,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: VideoButton_jsxFileName,
				lineNumber: 17,
				columnNumber: 5
			}, this);
		}

		VideoButton_s(VideoButton, "rydJMLFnynNgoQkPrEvjYt4IJo8=", false, function () {
			return [VideoButton_useStyles, hooks_useVideoThumbnail];
		});

		VideoButton_c = VideoButton;
		const VideoButton_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			icon: {
				position: 'absolute',
				bottom: 0,
				right: 0,
				color: theme.palette.common.white
			}
		}));
		/* harmony default export */
		var components_VideoButton = (VideoButton);

		var VideoButton_c;

		register(VideoButton_c, "VideoButton");
// CONCATENATED MODULE: ./src/core/helpers/sourceHelper.ts
		const sourceImageUrls = ['girl-919048_1280', 'doctor-5871743_640', 'woman-5883428_1280'].map(imageName => `${"/public"}/images/${imageName}.jpg`);
		const sourceVideoUrls = ['Dance - 32938', 'Doctor - 26732', 'Thoughtful - 35590'].map(videoName => `${"/public"}/videos/${videoName}.mp4`);
// CONCATENATED MODULE: ./src/core/components/SourceConfigCard.tsx
		var SourceConfigCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\SourceConfigCard.tsx",
			SourceConfigCard_s = createSignatureFunctionForTransform();


		function SourceConfigCard(props) {
			SourceConfigCard_s();

			const classes = SourceConfigCard_useStyles();
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Card["a" /* default */], {
				className: classes.root,
				children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CardContent["a" /* default */], {
					children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
						gutterBottom: true,
						variant: "h6",
						component: "h2",
						children: "Source"
					}, void 0, false, {
						fileName: SourceConfigCard_jsxFileName,
						lineNumber: 26,
						columnNumber: 9
					}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SelectionIconButton, {
						active: props.config.type === 'camera',
						onClick: () => props.onChange({
							type: 'camera'
						}),
						children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Videocam_default.a, {}, void 0, false, {
							fileName: SourceConfigCard_jsxFileName,
							lineNumber: 33,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: SourceConfigCard_jsxFileName,
						lineNumber: 29,
						columnNumber: 9
					}, this), sourceImageUrls.map(imageUrl => /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_ImageButton, {
						imageUrl: imageUrl,
						active: imageUrl === props.config.url,
						onClick: () => props.onChange({
							type: 'image',
							url: imageUrl
						})
					}, imageUrl, false, {
						fileName: SourceConfigCard_jsxFileName,
						lineNumber: 36,
						columnNumber: 11
					}, this)), sourceVideoUrls.map(videoUrl => /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_VideoButton, {
						videoUrl: videoUrl,
						active: videoUrl === props.config.url,
						onClick: () => props.onChange({
							type: 'video',
							url: videoUrl
						})
					}, videoUrl, false, {
						fileName: SourceConfigCard_jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this))]
				}, void 0, true, {
					fileName: SourceConfigCard_jsxFileName,
					lineNumber: 25,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: SourceConfigCard_jsxFileName,
				lineNumber: 24,
				columnNumber: 5
			}, this);
		}

		SourceConfigCard_s(SourceConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
			return [SourceConfigCard_useStyles];
		});

		SourceConfigCard_c = SourceConfigCard;
		const SourceConfigCard_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				flex: 1
			}
		}));
		/* harmony default export */
		var components_SourceConfigCard = (SourceConfigCard);

		var SourceConfigCard_c;

		register(SourceConfigCard_c, "SourceConfigCard");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
		var Avatar = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
		var Paper = __webpack_require__(336);

// CONCATENATED MODULE: ./src/core/helpers/segmentationHelper.ts
		const inputResolutions = {
			'360p': [640, 360],
			'144p': [256, 144],
			'96p': [160, 96]
		};

// CONCATENATED MODULE: ./src/pipelines/canvas2d/canvas2dPipeline.ts

		function buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvas, bodyPix, tflite, addFrameEvent) {
			const ctx = canvas.getContext('2d');
			const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
			const segmentationPixelCount = segmentationWidth * segmentationHeight;
			const segmentationMask = new ImageData(segmentationWidth, segmentationHeight);
			const segmentationMaskCanvas = document.createElement('canvas');
			segmentationMaskCanvas.width = segmentationWidth;
			segmentationMaskCanvas.height = segmentationHeight;
			const segmentationMaskCtx = segmentationMaskCanvas.getContext('2d');
			const inputMemoryOffset = tflite._getInputMemoryOffset() / 4;
			const outputMemoryOffset = tflite._getOutputMemoryOffset() / 4;
			let postProcessingConfig;

			async function render() {
				if (backgroundConfig.type !== 'none') {
					resizeSource();
				}

				addFrameEvent();

				if (backgroundConfig.type !== 'none') {
					if (segmentationConfig.model === 'bodyPix') {
						await runBodyPixInference();
					} else {
						runTFLiteInference();
					}
				}

				addFrameEvent();
				runPostProcessing();
			}

			function updatePostProcessingConfig(newPostProcessingConfig) {
				postProcessingConfig = newPostProcessingConfig;
			}

			function cleanUp() {// Nothing to clean up in this rendering pipeline
			}

			function resizeSource() {
				segmentationMaskCtx.drawImage(sourcePlayback.htmlElement, 0, 0, sourcePlayback.width, sourcePlayback.height, 0, 0, segmentationWidth, segmentationHeight);

				if (segmentationConfig.model === 'meet') {
					const imageData = segmentationMaskCtx.getImageData(0, 0, segmentationWidth, segmentationHeight);

					for (let i = 0; i < segmentationPixelCount; i++) {
						tflite.HEAPF32[inputMemoryOffset + i * 3] = imageData.data[i * 4] / 255;
						tflite.HEAPF32[inputMemoryOffset + i * 3 + 1] = imageData.data[i * 4 + 1] / 255;
						tflite.HEAPF32[inputMemoryOffset + i * 3 + 2] = imageData.data[i * 4 + 2] / 255;
					}
				}
			}

			async function runBodyPixInference() {
				const segmentation = await bodyPix.segmentPerson(segmentationMaskCanvas);

				for (let i = 0; i < segmentationPixelCount; i++) {
					// Sets only the alpha component of each pixel
					segmentationMask.data[i * 4 + 3] = segmentation.data[i] ? 255 : 0;
				}

				segmentationMaskCtx.putImageData(segmentationMask, 0, 0);
			}

			function runTFLiteInference() {
				tflite._runInference();

				for (let i = 0; i < segmentationPixelCount; i++) {
					const background = tflite.HEAPF32[outputMemoryOffset + i * 2];
					const person = tflite.HEAPF32[outputMemoryOffset + i * 2 + 1];
					const shift = Math.max(background, person);
					const backgroundExp = Math.exp(background - shift);
					const personExp = Math.exp(person - shift); // Sets only the alpha component of each pixel

					segmentationMask.data[i * 4 + 3] = 255 * personExp / (backgroundExp + personExp); // softmax
				}

				segmentationMaskCtx.putImageData(segmentationMask, 0, 0);
			}

			function runPostProcessing() {
				var _postProcessingConfig;

				ctx.globalCompositeOperation = 'copy';
				ctx.filter = 'none';

				if ((_postProcessingConfig = postProcessingConfig) === null || _postProcessingConfig === void 0 ? void 0 : _postProcessingConfig.smoothSegmentationMask) {
					if (backgroundConfig.type === 'blur') {
						ctx.filter = 'blur(8px)'; // FIXME Does not work on Safari
					} else if (backgroundConfig.type === 'image') {
						ctx.filter = 'blur(4px)'; // FIXME Does not work on Safari
					}
				}

				if (backgroundConfig.type !== 'none') {
					drawSegmentationMask();
					ctx.globalCompositeOperation = 'source-in';
					ctx.filter = 'none';
				}

				ctx.drawImage(sourcePlayback.htmlElement, 0, 0);

				if (backgroundConfig.type === 'blur') {
					blurBackground();
				}
			}

			function drawSegmentationMask() {
				ctx.drawImage(segmentationMaskCanvas, 0, 0, segmentationWidth, segmentationHeight, 0, 0, sourcePlayback.width, sourcePlayback.height);
			}

			function blurBackground() {
				ctx.globalCompositeOperation = 'destination-over';
				ctx.filter = 'blur(8px)'; // FIXME Does not work on Safari

				ctx.drawImage(sourcePlayback.htmlElement, 0, 0);
			}

			return {
				render,
				updatePostProcessingConfig,
				cleanUp
			};
		}

// CONCATENATED MODULE: ./src/pipelines/helpers/webglHelper.ts
		/**
		 * Use it along with boyswan.glsl-literal VSCode extension
		 * to get GLSL syntax highlighting.
		 * https://marketplace.visualstudio.com/items?itemName=boyswan.glsl-literal
		 *
		 * On VSCode OSS, boyswan.glsl-literal requires slevesque.shader extension
		 * to be installed as well.
		 * https://marketplace.visualstudio.com/items?itemName=slevesque.shader
		 */
		const glsl = String.raw;

		function createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer) {
			const program = createProgram(gl, vertexShader, fragmentShader);
			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
			gl.enableVertexAttribArray(positionAttributeLocation);
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
			const texCoordAttributeLocation = gl.getAttribLocation(program, 'a_texCoord');
			gl.enableVertexAttribArray(texCoordAttributeLocation);
			gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
			gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);
			return program;
		}

		function createProgram(gl, vertexShader, fragmentShader) {
			const program = gl.createProgram();
			gl.attachShader(program, vertexShader);
			gl.attachShader(program, fragmentShader);
			gl.linkProgram(program);

			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
				throw new Error(`Could not link WebGL program: ${gl.getProgramInfoLog(program)}`);
			}

			return program;
		}

		function compileShader(gl, shaderType, shaderSource) {
			const shader = gl.createShader(shaderType);
			gl.shaderSource(shader, shaderSource);
			gl.compileShader(shader);

			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				throw new Error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
			}

			return shader;
		}

		function createTexture(gl, internalformat, width, height, minFilter = gl.NEAREST, magFilter = gl.NEAREST) {
			const texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
			gl.texStorage2D(gl.TEXTURE_2D, 1, internalformat, width, height);
			return texture;
		}

		async function readPixelsAsync(gl, x, y, width, height, format, type, dest) {
			const buf = gl.createBuffer();
			gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
			gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
			gl.readPixels(x, y, width, height, format, type, 0);
			gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
			await getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);
			gl.deleteBuffer(buf);
			return dest;
		}

		async function getBufferSubDataAsync(gl, target, buffer, srcByteOffset, dstBuffer, dstOffset, length) {
			const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
			gl.flush();
			const res = await clientWaitAsync(gl, sync);
			gl.deleteSync(sync);

			if (res !== gl.WAIT_FAILED) {
				gl.bindBuffer(target, buffer);
				gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
				gl.bindBuffer(target, null);
			}
		}

		function clientWaitAsync(gl, sync) {
			return new Promise(resolve => {
				function test() {
					const res = gl.clientWaitSync(sync, 0, 0);

					if (res === gl.WAIT_FAILED) {
						resolve(res);
						return;
					}

					if (res === gl.TIMEOUT_EXPIRED) {
						requestAnimationFrame(test);
						return;
					}

					resolve(res);
				}

				requestAnimationFrame(test);
			});
		}

// CONCATENATED MODULE: ./src/pipelines/webgl2/backgroundBlurStage.ts
		var backgroundBlurStage_s2 = createSignatureFunctionForTransform();


		function buildBackgroundBlurStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) {
			backgroundBlurStage_s2();

			var _s = createSignatureFunctionForTransform();

			const vertexShaderSource = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    uniform float u_flipY;

    out vec2 v_texCoord;

    void main() {
      // Flipping Y is required for the last pass when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, u_flipY), 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `;
			const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform vec2 u_texelSize;

    in vec2 v_texCoord;

    out vec4 outColor;

    const float offset[5] = float[](0.0, 1.0, 2.0, 3.0, 4.0);
    const float weight[5] = float[](0.2270270270, 0.1945945946, 0.1216216216,
      0.0540540541, 0.0162162162);

    void main() {
      vec4 centerColor = texture(u_inputFrame, v_texCoord);
      float personMask = texture(u_personMask, v_texCoord).a;

      vec4 frameColor = centerColor * weight[0] * (1.0 - personMask);

      for (int i = 1; i < 5; i++) {
        vec2 offset = vec2(offset[i]) * u_texelSize;

        vec2 texCoord = v_texCoord + offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);

        texCoord = v_texCoord - offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);
      }
      outColor = vec4(frameColor.rgb + (1.0 - frameColor.a) * centerColor.rgb, 1.0);
    }
  `;
			const {
				width: outputWidth,
				height: outputHeight
			} = canvas;
			const texelWidth = 1 / outputWidth;
			const texelHeight = 1 / outputHeight;
			const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
			const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
			const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
			const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
			const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
			const flipYLocation = gl.getUniformLocation(program, 'u_flipY');
			const texture1 = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
			const texture2 = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
			const frameBuffer1 = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture1, 0);
			const frameBuffer2 = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer2);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture2, 0);
			gl.useProgram(program);
			gl.uniform1i(inputFrameLocation, 0);
			gl.uniform1i(personMaskLocation, 1);

			function render() {
				_s();

				gl.useProgram(program);
				gl.activeTexture(gl.TEXTURE1);
				gl.bindTexture(gl.TEXTURE_2D, personMaskTexture);
				gl.uniform1f(flipYLocation, 1.0);
				gl.activeTexture(gl.TEXTURE0);
				gl.uniform2f(texelSizeLocation, 0, texelHeight);
				gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
				gl.viewport(0, 0, outputWidth, outputHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

				for (let i = 0; i < 9; i++) {
					gl.bindTexture(gl.TEXTURE_2D, texture1);
					gl.uniform2f(texelSizeLocation, texelWidth, 0);
					gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer2);
					gl.viewport(0, 0, outputWidth, outputHeight);
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
					gl.bindTexture(gl.TEXTURE_2D, texture2);
					gl.uniform2f(texelSizeLocation, 0, texelHeight);
					gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
					gl.viewport(0, 0, outputWidth, outputHeight);
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
				}

				gl.bindTexture(gl.TEXTURE_2D, texture1);
				gl.uniform2f(texelSizeLocation, texelWidth, 0);
				gl.uniform1f(flipYLocation, -1.0);
				gl.bindFramebuffer(gl.FRAMEBUFFER, null);
				gl.viewport(0, 0, outputWidth, outputHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			}

			_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function cleanUp() {
				gl.deleteFramebuffer(frameBuffer2);
				gl.deleteFramebuffer(frameBuffer1);
				gl.deleteTexture(texture2);
				gl.deleteTexture(texture1);
				gl.deleteProgram(program);
				gl.deleteShader(fragmentShader);
				gl.deleteShader(vertexShader);
			}

			return {
				render,
				cleanUp
			};
		}

		backgroundBlurStage_s2(buildBackgroundBlurStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
// CONCATENATED MODULE: ./src/pipelines/webgl2/backgroundImageStage.ts
		var _s5 = createSignatureFunctionForTransform();


		function buildBackgroundImageStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas) {
			_s5();

			var _s = createSignatureFunctionForTransform(),
				_s2 = createSignatureFunctionForTransform(),
				_s3 = createSignatureFunctionForTransform(),
				_s4 = createSignatureFunctionForTransform();

			const vertexShaderSource = glsl`#version 300 es

    uniform vec2 u_backgroundScale;
    uniform vec2 u_backgroundOffset;

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;
    out vec2 v_backgroundCoord;

    void main() {
      // Flipping Y is required when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
      v_texCoord = a_texCoord;
      v_backgroundCoord = a_texCoord * u_backgroundScale + u_backgroundOffset;
    }
  `;
			const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform sampler2D u_background;
    uniform vec2 u_coverage;
    uniform float u_lightWrapping;
    uniform float u_blendMode;

    in vec2 v_texCoord;
    in vec2 v_backgroundCoord;

    out vec4 outColor;

    vec3 screen(vec3 a, vec3 b) {
      return 1.0 - (1.0 - a) * (1.0 - b);
    }

    vec3 linearDodge(vec3 a, vec3 b) {
      return a + b;
    }

    void main() {
      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;
      vec3 backgroundColor = texture(u_background, v_backgroundCoord).rgb;
      float personMask = texture(u_personMask, v_texCoord).a;
      float lightWrapMask = 1.0 - max(0.0, personMask - u_coverage.y) / (1.0 - u_coverage.y);
      vec3 lightWrap = u_lightWrapping * lightWrapMask * backgroundColor;
      frameColor = u_blendMode * linearDodge(frameColor, lightWrap) +
        (1.0 - u_blendMode) * screen(frameColor, lightWrap);
      personMask = smoothstep(u_coverage.x, u_coverage.y, personMask);
      outColor = vec4(frameColor * personMask + backgroundColor * (1.0 - personMask), 1.0);
    }
  `;
			const {
				width: outputWidth,
				height: outputHeight
			} = canvas;
			const outputRatio = outputWidth / outputHeight;
			const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
			const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
			const backgroundScaleLocation = gl.getUniformLocation(program, 'u_backgroundScale');
			const backgroundOffsetLocation = gl.getUniformLocation(program, 'u_backgroundOffset');
			const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
			const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
			const backgroundLocation = gl.getUniformLocation(program, 'u_background');
			const coverageLocation = gl.getUniformLocation(program, 'u_coverage');
			const lightWrappingLocation = gl.getUniformLocation(program, 'u_lightWrapping');
			const blendModeLocation = gl.getUniformLocation(program, 'u_blendMode');
			gl.useProgram(program);
			gl.uniform2f(backgroundScaleLocation, 1, 1);
			gl.uniform2f(backgroundOffsetLocation, 0, 0);
			gl.uniform1i(inputFrameLocation, 0);
			gl.uniform1i(personMaskLocation, 1);
			gl.uniform2f(coverageLocation, 0, 1);
			gl.uniform1f(lightWrappingLocation, 0);
			gl.uniform1f(blendModeLocation, 0);
			let backgroundTexture = null; // TODO Find a better to handle background being loaded

			if (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.complete) {
				updateBackgroundImage(backgroundImage);
			} else if (backgroundImage) {
				backgroundImage.onload = () => {
					updateBackgroundImage(backgroundImage);
				};
			}

			function render() {
				_s();

				gl.useProgram(program);
				gl.activeTexture(gl.TEXTURE1);
				gl.bindTexture(gl.TEXTURE_2D, personMaskTexture);

				if (backgroundTexture !== null) {
					gl.activeTexture(gl.TEXTURE2);
					gl.bindTexture(gl.TEXTURE_2D, backgroundTexture); // TODO Handle correctly the background not loaded yet

					gl.uniform1i(backgroundLocation, 2);
				}

				gl.bindFramebuffer(gl.FRAMEBUFFER, null);
				gl.viewport(0, 0, outputWidth, outputHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			}

			_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function updateBackgroundImage(backgroundImage) {
				backgroundTexture = createTexture(gl, gl.RGBA8, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.LINEAR, gl.LINEAR);
				gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.RGBA, gl.UNSIGNED_BYTE, backgroundImage);
				let xOffset = 0;
				let yOffset = 0;
				let backgroundWidth = backgroundImage.naturalWidth;
				let backgroundHeight = backgroundImage.naturalHeight;
				const backgroundRatio = backgroundWidth / backgroundHeight;

				if (backgroundRatio < outputRatio) {
					backgroundHeight = backgroundWidth / outputRatio;
					yOffset = (backgroundImage.naturalHeight - backgroundHeight) / 2;
				} else {
					backgroundWidth = backgroundHeight * outputRatio;
					xOffset = (backgroundImage.naturalWidth - backgroundWidth) / 2;
				}

				const xScale = backgroundWidth / backgroundImage.naturalWidth;
				const yScale = backgroundHeight / backgroundImage.naturalHeight;
				xOffset /= backgroundImage.naturalWidth;
				yOffset /= backgroundImage.naturalHeight;
				gl.uniform2f(backgroundScaleLocation, xScale, yScale);
				gl.uniform2f(backgroundOffsetLocation, xOffset, yOffset);
			}

			function updateCoverage(coverage) {
				_s2();

				gl.useProgram(program);
				gl.uniform2f(coverageLocation, coverage[0], coverage[1]);
			}

			_s2(updateCoverage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function updateLightWrapping(lightWrapping) {
				_s3();

				gl.useProgram(program);
				gl.uniform1f(lightWrappingLocation, lightWrapping);
			}

			_s3(updateLightWrapping, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function updateBlendMode(blendMode) {
				_s4();

				gl.useProgram(program);
				gl.uniform1f(blendModeLocation, blendMode === 'screen' ? 0 : 1);
			}

			_s4(updateBlendMode, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function cleanUp() {
				gl.deleteTexture(backgroundTexture);
				gl.deleteProgram(program);
				gl.deleteShader(fragmentShader);
				gl.deleteShader(vertexShader);
			}

			return {
				render,
				updateCoverage,
				updateLightWrapping,
				updateBlendMode,
				cleanUp
			};
		}

		_s5(buildBackgroundImageStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
// CONCATENATED MODULE: ./src/pipelines/webgl2/jointBilateralFilterStage.ts
		var jointBilateralFilterStage_s4 = createSignatureFunctionForTransform();


		function buildJointBilateralFilterStage(gl, vertexShader, positionBuffer, texCoordBuffer, inputTexture, segmentationConfig, outputTexture, canvas) {
			jointBilateralFilterStage_s4();

			var _s = createSignatureFunctionForTransform(),
				_s2 = createSignatureFunctionForTransform(),
				_s3 = createSignatureFunctionForTransform();

			const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_segmentationMask;
    uniform vec2 u_texelSize;
    uniform float u_step;
    uniform float u_radius;
    uniform float u_offset;
    uniform float u_sigmaTexel;
    uniform float u_sigmaColor;

    in vec2 v_texCoord;

    out vec4 outColor;

    float gaussian(float x, float sigma) {
      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);
      return exp((x * x) * coeff);
    }

    void main() {
      vec2 centerCoord = v_texCoord;
      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;
      float newVal = 0.0;

      float spaceWeight = 0.0;
      float colorWeight = 0.0;
      float totalWeight = 0.0;

      // Subsample kernel space.
      for (float i = -u_radius + u_offset; i <= u_radius; i += u_step) {
        for (float j = -u_radius + u_offset; j <= u_radius; j += u_step) {
          vec2 shift = vec2(j, i) * u_texelSize;
          vec2 coord = vec2(centerCoord + shift);
          vec3 frameColor = texture(u_inputFrame, coord).rgb;
          float outVal = texture(u_segmentationMask, coord).a;

          spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);
          colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);
          totalWeight += spaceWeight * colorWeight;

          newVal += spaceWeight * colorWeight * outVal;
        }
      }
      newVal /= totalWeight;

      outColor = vec4(vec3(0.0), newVal);
    }
  `;
			const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
			const {
				width: outputWidth,
				height: outputHeight
			} = canvas;
			const texelWidth = 1 / outputWidth;
			const texelHeight = 1 / outputHeight;
			const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
			const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
			const segmentationMaskLocation = gl.getUniformLocation(program, 'u_segmentationMask');
			const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
			const stepLocation = gl.getUniformLocation(program, 'u_step');
			const radiusLocation = gl.getUniformLocation(program, 'u_radius');
			const offsetLocation = gl.getUniformLocation(program, 'u_offset');
			const sigmaTexelLocation = gl.getUniformLocation(program, 'u_sigmaTexel');
			const sigmaColorLocation = gl.getUniformLocation(program, 'u_sigmaColor');
			const frameBuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
			gl.useProgram(program);
			gl.uniform1i(inputFrameLocation, 0);
			gl.uniform1i(segmentationMaskLocation, 1);
			gl.uniform2f(texelSizeLocation, texelWidth, texelHeight); // Ensures default values are configured to prevent infinite
			// loop in fragment shader

			updateSigmaSpace(0);
			updateSigmaColor(0);

			function render() {
				_s();

				gl.useProgram(program);
				gl.activeTexture(gl.TEXTURE1);
				gl.bindTexture(gl.TEXTURE_2D, inputTexture);
				gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
				gl.viewport(0, 0, outputWidth, outputHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			}

			_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function updateSigmaSpace(sigmaSpace) {
				_s2();

				sigmaSpace *= Math.max(outputWidth / segmentationWidth, outputHeight / segmentationHeight);
				const kSparsityFactor = 0.66; // Higher is more sparse.

				const sparsity = Math.max(1, Math.sqrt(sigmaSpace) * kSparsityFactor);
				const step = sparsity;
				const radius = sigmaSpace;
				const offset = step > 1 ? step * 0.5 : 0;
				const sigmaTexel = Math.max(texelWidth, texelHeight) * sigmaSpace;
				gl.useProgram(program);
				gl.uniform1f(stepLocation, step);
				gl.uniform1f(radiusLocation, radius);
				gl.uniform1f(offsetLocation, offset);
				gl.uniform1f(sigmaTexelLocation, sigmaTexel);
			}

			_s2(updateSigmaSpace, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function updateSigmaColor(sigmaColor) {
				_s3();

				gl.useProgram(program);
				gl.uniform1f(sigmaColorLocation, sigmaColor);
			}

			_s3(updateSigmaColor, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function cleanUp() {
				gl.deleteFramebuffer(frameBuffer);
				gl.deleteProgram(program);
				gl.deleteShader(fragmentShader);
			}

			return {
				render,
				updateSigmaSpace,
				updateSigmaColor,
				cleanUp
			};
		}

		jointBilateralFilterStage_s4(buildJointBilateralFilterStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
// CONCATENATED MODULE: ./src/pipelines/webgl2/resizingStage.ts
		var resizingStage_s2 = createSignatureFunctionForTransform();


		function buildResizingStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite) {
			resizingStage_s2();

			var _s = createSignatureFunctionForTransform();

			const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      outColor = texture(u_inputFrame, v_texCoord);
    }
  `; // TFLite memory will be accessed as float32

			const tfliteInputMemoryOffset = tflite._getInputMemoryOffset() / 4;
			const [outputWidth, outputHeight] = inputResolutions[segmentationConfig.inputResolution];
			const outputPixelCount = outputWidth * outputHeight;
			const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
			const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
			const outputTexture = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
			const frameBuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
			const outputPixels = new Uint8Array(outputPixelCount * 4);
			gl.useProgram(program);
			gl.uniform1i(inputFrameLocation, 0);

			function render() {
				_s();

				gl.useProgram(program);
				gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
				gl.viewport(0, 0, outputWidth, outputHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Downloads pixels asynchronously from GPU while rendering the current frame

				readPixelsAsync(gl, 0, 0, outputWidth, outputHeight, gl.RGBA, gl.UNSIGNED_BYTE, outputPixels);

				for (let i = 0; i < outputPixelCount; i++) {
					const tfliteIndex = tfliteInputMemoryOffset + i * 3;
					const outputIndex = i * 4;
					tflite.HEAPF32[tfliteIndex] = outputPixels[outputIndex] / 255;
					tflite.HEAPF32[tfliteIndex + 1] = outputPixels[outputIndex + 1] / 255;
					tflite.HEAPF32[tfliteIndex + 2] = outputPixels[outputIndex + 2] / 255;
				}
			}

			_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function cleanUp() {
				gl.deleteFramebuffer(frameBuffer);
				gl.deleteTexture(outputTexture);
				gl.deleteProgram(program);
				gl.deleteShader(fragmentShader);
			}

			return {
				render,
				cleanUp
			};
		}

		resizingStage_s2(buildResizingStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
// CONCATENATED MODULE: ./src/pipelines/webgl2/softmaxStage.ts
		var softmaxStage_s2 = createSignatureFunctionForTransform();


		function buildSoftmaxStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, outputTexture) {
			softmaxStage_s2();

			var _s = createSignatureFunctionForTransform();

			const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputSegmentation;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;
      float shift = max(segmentation.r, segmentation.g);
      float backgroundExp = exp(segmentation.r - shift);
      float personExp = exp(segmentation.g - shift);
      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));
    }
  `; // TFLite memory will be accessed as float32

			const tfliteOutputMemoryOffset = tflite._getOutputMemoryOffset() / 4;
			const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
			const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
			const inputLocation = gl.getUniformLocation(program, 'u_inputSegmentation');
			const inputTexture = createTexture(gl, gl.RG32F, segmentationWidth, segmentationHeight);
			const frameBuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
			gl.useProgram(program);
			gl.uniform1i(inputLocation, 1);

			function render() {
				_s();

				gl.useProgram(program);
				gl.activeTexture(gl.TEXTURE1);
				gl.bindTexture(gl.TEXTURE_2D, inputTexture);
				gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, segmentationWidth, segmentationHeight, gl.RG, gl.FLOAT, tflite.HEAPF32, tfliteOutputMemoryOffset);
				gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
				gl.viewport(0, 0, segmentationWidth, segmentationHeight);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			}

			_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
				return [gl.useProgram];
			});

			function cleanUp() {
				gl.deleteFramebuffer(frameBuffer);
				gl.deleteTexture(inputTexture);
				gl.deleteProgram(program);
				gl.deleteShader(fragmentShader);
			}

			return {
				render,
				cleanUp
			};
		}

		softmaxStage_s2(buildSoftmaxStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);

// CONCATENATED MODULE: ./src/pipelines/webgl2/webgl2Pipeline.ts


		function buildWebGL2Pipeline(sourcePlayback, backgroundImage, backgroundConfig, segmentationConfig, canvas, tflite, addFrameEvent) {
			const vertexShaderSource = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `;
			const {
				width: frameWidth,
				height: frameHeight
			} = sourcePlayback;
			const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
			const gl = canvas.getContext('webgl2');
			const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
			const vertexArray = gl.createVertexArray();
			gl.bindVertexArray(vertexArray);
			const positionBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
			const texCoordBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW); // We don't use texStorage2D here because texImage2D seems faster
			// to upload video texture than texSubImage2D even though the latter
			// is supposed to be the recommended way:
			// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#use_texstorage_to_create_textures

			const inputFrameTexture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, inputFrameTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST); // TODO Rename segmentation and person mask to be more specific

			const segmentationTexture = createTexture(gl, gl.RGBA8, segmentationWidth, segmentationHeight);
			const personMaskTexture = createTexture(gl, gl.RGBA8, frameWidth, frameHeight);
			const resizingStage = buildResizingStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite);
			const softmaxStage = buildSoftmaxStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, segmentationTexture);
			const jointBilateralFilterStage = buildJointBilateralFilterStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationTexture, segmentationConfig, personMaskTexture, canvas);
			const backgroundStage = backgroundConfig.type === 'blur' ? buildBackgroundBlurStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) : buildBackgroundImageStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas);

			async function render() {
				gl.clearColor(0, 0, 0, 0);
				gl.clear(gl.COLOR_BUFFER_BIT);
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, inputFrameTexture); // texImage2D seems faster than texSubImage2D to upload
				// video texture

				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourcePlayback.htmlElement);
				gl.bindVertexArray(vertexArray);
				resizingStage.render();
				addFrameEvent();

				tflite._runInference();

				addFrameEvent();
				softmaxStage.render();
				jointBilateralFilterStage.render();
				backgroundStage.render();
			}

			function updatePostProcessingConfig(postProcessingConfig) {
				jointBilateralFilterStage.updateSigmaSpace(postProcessingConfig.jointBilateralFilter.sigmaSpace);
				jointBilateralFilterStage.updateSigmaColor(postProcessingConfig.jointBilateralFilter.sigmaColor); // TODO Handle no background in a separate pipeline path

				if (backgroundConfig.type === 'none') {
					const backgroundImageStage = backgroundStage;
					backgroundImageStage.updateCoverage([0, 0.9999]);
					backgroundImageStage.updateLightWrapping(0);
				} else if (backgroundConfig.type === 'image') {
					const backgroundImageStage = backgroundStage;
					backgroundImageStage.updateCoverage(postProcessingConfig.coverage);
					backgroundImageStage.updateLightWrapping(postProcessingConfig.lightWrapping);
					backgroundImageStage.updateBlendMode(postProcessingConfig.blendMode);
				}
			}

			function cleanUp() {
				backgroundStage.cleanUp();
				jointBilateralFilterStage.cleanUp();
				softmaxStage.cleanUp();
				resizingStage.cleanUp();
				gl.deleteTexture(personMaskTexture);
				gl.deleteTexture(segmentationTexture);
				gl.deleteTexture(inputFrameTexture);
				gl.deleteBuffer(texCoordBuffer);
				gl.deleteBuffer(positionBuffer);
				gl.deleteVertexArray(vertexArray);
				gl.deleteShader(vertexShader);
			}

			return {
				render,
				updatePostProcessingConfig,
				cleanUp
			};
		}

// CONCATENATED MODULE: ./src/core/hooks/useStats.ts
		var useStats_s = createSignatureFunctionForTransform();


		function useStats() {
			useStats_s();

			const [fps, setFps] = Object(react["useState"])(0);
			const [durations, setDurations] = Object(react["useState"])([]);
			const previousTimeRef = Object(react["useRef"])(0);
			const beginTimeRef = Object(react["useRef"])(0);
			const durationsRef = Object(react["useRef"])([]);
			const eventCount = Object(react["useRef"])(0);
			const frameCountRef = Object(react["useRef"])(0); // The useCallbacks below are required to prevent infinite loop
			// when the functions are called inside useEffect

			const beginFrame = Object(react["useCallback"])(() => {
				beginTimeRef.current = Date.now();
			}, []);
			const addFrameEvent = Object(react["useCallback"])(() => {
				const time = Date.now();
				durationsRef.current[eventCount.current] = time - beginTimeRef.current;
				beginTimeRef.current = time;
				eventCount.current++;
			}, []);
			const endFrame = Object(react["useCallback"])(() => {
				const time = Date.now();
				durationsRef.current[eventCount.current] = time - beginTimeRef.current;
				frameCountRef.current++;

				if (time >= previousTimeRef.current + 1000) {
					setFps(frameCountRef.current * 1000 / (time - previousTimeRef.current));
					setDurations(durationsRef.current);
					previousTimeRef.current = time;
					frameCountRef.current = 0;
				}

				eventCount.current = 0;
			}, []);
			return {fps, durations, beginFrame, addFrameEvent, endFrame};
		}

		useStats_s(useStats, "OYaQh1/wbO0sY6LqQebi+5QHbjI=");

		/* harmony default export */
		var hooks_useStats = (useStats);
// CONCATENATED MODULE: ./src/core/hooks/useRenderingPipeline.ts
		var useRenderingPipeline_s = createSignatureFunctionForTransform();


		function useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite) {
			useRenderingPipeline_s();

			const [pipeline, setPipeline] = Object(react["useState"])(null);
			const backgroundImageRef = Object(react["useRef"])(null);
			const canvasRef = Object(react["useRef"])(null);
			const {fps, durations, beginFrame, addFrameEvent, endFrame} = hooks_useStats();
			Object(react["useEffect"])(() => {
				// The useEffect cleanup function is not enough to stop
				// the rendering loop when the framerate is low
				let shouldRender = true;
				let renderRequestId;
				const newPipeline = segmentationConfig.pipeline === 'webgl2'
					? buildWebGL2Pipeline(sourcePlayback, backgroundImageRef.current, backgroundConfig, segmentationConfig, canvasRef.current, tflite, addFrameEvent)
					: buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef.current, bodyPix, tflite, addFrameEvent);

				async function render() {
					if (!shouldRender) {
						return;
					}

					beginFrame();
					await newPipeline.render();
					endFrame();
					renderRequestId = requestAnimationFrame(render);
				}

				render();
				console.warn('Animation started:', sourcePlayback, backgroundConfig, segmentationConfig);
				setPipeline(newPipeline);
				return () => {
					shouldRender = false;
					cancelAnimationFrame(renderRequestId);
					newPipeline.cleanUp();
					console.warn('Animation stopped:', sourcePlayback, backgroundConfig, segmentationConfig);
					setPipeline(null);
				};
			}, [sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite, setPipeline, beginFrame, addFrameEvent, endFrame]);
			return {pipeline, backgroundImageRef, canvasRef, fps, durations};
		}

		// useRenderingPipeline_s(useRenderingPipeline, "/6zN20EQjTLikNsfqNNksv5KS4c=", false, function () {
		// 	return [hooks_useStats];
		// });

		/* harmony default export */
		var hooks_useRenderingPipeline = useRenderingPipeline;
// CONCATENATED MODULE: ./src/core/components/OutputViewer.tsx
		var OutputViewer_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\OutputViewer.tsx",
			OutputViewer_s = createSignatureFunctionForTransform();


		function OutputViewer(props) {
			OutputViewer_s();

			const classes = OutputViewer_useStyles();
			const {
				pipeline,
				backgroundImageRef,
				canvasRef,
				fps,
				durations: [resizingDuration, inferenceDuration, postProcessingDuration]
			} = hooks_useRenderingPipeline(props.sourcePlayback, props.backgroundConfig, props.segmentationConfig, props.bodyPix, props.tflite);
			Object(react["useEffect"])(() => {
				if (pipeline) {
					pipeline.updatePostProcessingConfig(props.postProcessingConfig);
				}
			}, [pipeline, props.postProcessingConfig]);
			const statDetails = [`resizing ${resizingDuration}ms`, `inference ${inferenceDuration}ms`, `post-processing ${postProcessingDuration}ms`];
			const stats = `${Math.round(fps)} fps (${statDetails.join(', ')})`;
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: classes.root,
				children: [props.backgroundConfig.type === 'image' && /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("img", {
					ref: backgroundImageRef,
					className: classes.render,
					src: props.backgroundConfig.url,
					alt: "",
					hidden: props.segmentationConfig.pipeline === 'webgl2'
				}, void 0, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("canvas", {
					ref: canvasRef,
					className: classes.render,
					width: props.sourcePlayback.width,
					height: props.sourcePlayback.height
				}, props.segmentationConfig.pipeline, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 61,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {
					className: classes.stats,
					variant: "caption",
					children: stats
				}, void 0, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 70,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: OutputViewer_jsxFileName,
				lineNumber: 51,
				columnNumber: 5
			}, this);
		}

		OutputViewer_s(OutputViewer, "exVjBXd8At5D8Gt+1xp0J2QiUTc=", false, function () {
			return [OutputViewer_useStyles, hooks_useRenderingPipeline];
		});

		OutputViewer_c = OutputViewer;
		const OutputViewer_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				flex: 1,
				position: 'relative'
			},
			render: {
				position: 'absolute',
				width: '100%',
				height: '100%',
				objectFit: 'cover'
			},
			stats: {
				position: 'absolute',
				top: 0,
				right: 0,
				left: 0,
				textAlign: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.48)',
				color: theme.palette.common.white
			}
		}));
		/* harmony default export */
		var components_OutputViewer = (OutputViewer);

		var OutputViewer_c;

		register(OutputViewer_c, "OutputViewer");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
		var CircularProgress = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/VideocamOff.js
		var VideocamOff = __webpack_require__(272);
		var VideocamOff_default = /*#__PURE__*/__webpack_require__.n(VideocamOff);

// CONCATENATED MODULE: ./src/core/components/SourceViewer.tsx
		var SourceViewer_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\SourceViewer.tsx",
			SourceViewer_s = createSignatureFunctionForTransform();


		function SourceViewer(props) {
			SourceViewer_s();

			const classes = SourceViewer_useStyles();
			const [sourceUrl, setSourceUrl] = Object(react["useState"])();
			const [isLoading, setLoading] = Object(react["useState"])(false);
			const [isCameraError, setCameraError] = Object(react["useState"])(false);
			const videoRef = Object(react["useRef"])(null);
			Object(react["useEffect"])(() => {
				setSourceUrl(undefined);
				setLoading(true);
				setCameraError(false); // Enforces reloading the resource, otherwise
				// onLoad event is not always dispatched and the
				// progress indicator never disappears

				setTimeout(() => setSourceUrl(props.sourceConfig.url));
			}, [props.sourceConfig]);
			Object(react["useEffect"])(() => {
				async function getCameraStream() {
					try {
						const constraint = {
							video: true
						};
						const stream = await navigator.mediaDevices.getUserMedia(constraint);

						if (videoRef.current) {
							videoRef.current.srcObject = stream;
							return;
						}
					} catch (error) {
						console.error('Error opening video camera.', error);
					}

					setLoading(false);
					setCameraError(true);
				}

				if (props.sourceConfig.type === 'camera') {
					getCameraStream();
				} else if (videoRef.current) {
					videoRef.current.srcObject = null;
				}
			}, [props.sourceConfig]);

			function handleImageLoad(event) {
				const image = event.target;
				props.onLoad({
					htmlElement: image,
					width: image.naturalWidth,
					height: image.naturalHeight
				});
				setLoading(false);
			}

			function handleVideoLoad(event) {
				const video = event.target;
				props.onLoad({
					htmlElement: video,
					width: video.videoWidth,
					height: video.videoHeight
				});
				setLoading(false);
			}

			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: classes.root,
				children: [isLoading && /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CircularProgress["a" /* default */], {}, void 0, false, {
					fileName: SourceViewer_jsxFileName,
					lineNumber: 75,
					columnNumber: 21
				}, this), props.sourceConfig.type === 'image' ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("img", {
					className: classes.sourcePlayback,
					src: sourceUrl,
					hidden: isLoading,
					alt: "",
					onLoad: handleImageLoad
				}, void 0, false, {
					fileName: SourceViewer_jsxFileName,
					lineNumber: 77,
					columnNumber: 9
				}, this) : isCameraError ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(VideocamOff_default.a, {
					fontSize: "large"
				}, void 0, false, {
					fileName: SourceViewer_jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this) : /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("video", {
					ref: videoRef,
					className: classes.sourcePlayback,
					src: sourceUrl,
					hidden: isLoading,
					autoPlay: true,
					playsInline: true,
					controls: false,
					muted: true,
					loop: true,
					onLoadedData: handleVideoLoad
				}, void 0, false, {
					fileName: SourceViewer_jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: SourceViewer_jsxFileName,
				lineNumber: 74,
				columnNumber: 5
			}, this);
		}

		SourceViewer_s(SourceViewer, "7+UEpgAajicL1qRahzdiXW5HIM4=", false, function () {
			return [SourceViewer_useStyles];
		});

		SourceViewer_c = SourceViewer;
		const SourceViewer_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				[theme.breakpoints.down('xs')]: {
					width: 0,
					overflow: 'hidden'
				},
				[theme.breakpoints.up('sm')]: {
					flex: 1,
					borderRightWidth: 1,
					borderRightStyle: 'solid',
					borderRightColor: theme.palette.divider
				}
			},
			sourcePlayback: {
				position: 'absolute',
				width: '100%',
				height: '100%',
				objectFit: 'cover'
			}
		}));
		/* harmony default export */
		var components_SourceViewer = (SourceViewer);

		var SourceViewer_c;

		register(SourceViewer_c, "SourceViewer");
// CONCATENATED MODULE: ./src/core/components/ViewerCard.tsx
		var ViewerCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\ViewerCard.tsx",
			ViewerCard_s = createSignatureFunctionForTransform();


		function ViewerCard(props) {
			ViewerCard_s();

			const classes = ViewerCard_useStyles();
			const [sourcePlayback, setSourcePlayback] = Object(react["useState"])();
			Object(react["useEffect"])(() => {
				setSourcePlayback(undefined);
			}, [props.sourceConfig]);
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Paper["a" /* default */], {
				className: classes.root,
				children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SourceViewer, {
					sourceConfig: props.sourceConfig,
					onLoad: setSourcePlayback
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 33,
					columnNumber: 7
				}, this), sourcePlayback && props.bodyPix && props.tflite ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_OutputViewer, {
					sourcePlayback: sourcePlayback,
					backgroundConfig: props.backgroundConfig,
					segmentationConfig: props.segmentationConfig,
					postProcessingConfig: props.postProcessingConfig,
					bodyPix: props.bodyPix,
					tflite: props.tflite
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this) : /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
					className: classes.noOutput,
					children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Avatar["a" /* default */], {
						className: classes.avatar
					}, void 0, false, {
						fileName: ViewerCard_jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: ViewerCard_jsxFileName,
				lineNumber: 32,
				columnNumber: 5
			}, this);
		}

		ViewerCard_s(ViewerCard, "BF5+Hx0pqwbDNha7+ltEoFFTAiI=", false, function () {
			return [ViewerCard_useStyles];
		});

		ViewerCard_c = ViewerCard;
		const ViewerCard_useStyles = Object(makeStyles["a" /* default */])(theme => {
			const minHeight = [`${theme.spacing(52)}px`, `100vh - ${theme.spacing(2)}px`];
			return Object(createStyles["a" /* default */])({
				root: {
					minHeight: `calc(min(${minHeight.join(', ')}))`,
					display: 'flex',
					overflow: 'hidden',
					[theme.breakpoints.up('md')]: {
						gridColumnStart: 1,
						gridColumnEnd: 3
					},
					[theme.breakpoints.up('lg')]: {
						gridRowStart: 1,
						gridRowEnd: 3
					}
				},
				noOutput: {
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				avatar: {
					width: theme.spacing(20),
					height: theme.spacing(20)
				}
			});
		});
		/* harmony default export */
		var components_ViewerCard = (ViewerCard);

		var ViewerCard_c;

		register(ViewerCard_c, "ViewerCard");
// EXTERNAL MODULE: ./node_modules/@tensorflow-models/body-pix/dist/body-pix.esm.js
		var body_pix_esm = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs/dist/index.js + 514 modules
		var dist = __webpack_require__(293);

// CONCATENATED MODULE: ./src/core/hooks/useBodyPix.ts
		var useBodyPix_s = createSignatureFunctionForTransform();

		function useBodyPix() {
			useBodyPix_s();

			const [bodyPix, setBodyPix] = Object(react["useState"])();
			Object(react["useEffect"])(() => {
				async function loadBodyPix() {
					// 初始化准备
					console.log('Loading TensorFlow.js and BodyPix segmentation model');
					await dist["a" /* ready */]();   // function ready() {return _engine__WEBPACK_IMPORTED_MODULE_0__[/* ENGINE */ "a"].ready();}
					// load 加载
					setBodyPix(await body_pix_esm["a" /* load */]());
					console.warn('TensorFlow.js and BodyPix loaded');
					// debugger
				}

				loadBodyPix();
			}, []);
			return bodyPix;
		}

		useBodyPix_s(useBodyPix, "GbEnrZKCrcdijtZsXRLRLzSRhDo=");

		/* harmony default export */
		var hooks_useBodyPix = (useBodyPix);
// CONCATENATED MODULE: ./src/core/hooks/useTFLite.ts
		var useTFLite_s = createSignatureFunctionForTransform();


		function useTFLite(segmentationConfig) {
			useTFLite_s();

			const [tflite, setTFLite] = Object(react["useState"])();
			const [tfliteSIMD, setTFLiteSIMD] = Object(react["useState"])();
			const [selectedTFLite, setSelectedTFLite] = Object(react["useState"])();
			const [isSIMDSupported, setSIMDSupported] = Object(react["useState"])(false);
			Object(react["useEffect"])(() => {
				async function loadTFLite() {
					createTFLiteModule().then(setTFLite);

					try {
						const createdTFLiteSIMD = await createTFLiteSIMDModule();
						setTFLiteSIMD(createdTFLiteSIMD);
						setSIMDSupported(true);
					} catch (error) {
						console.warn('Failed to create TFLite SIMD WebAssembly module.', error);
					}
				}

				loadTFLite();
			}, []);
			Object(react["useEffect"])(() => {
				async function loadMeetModel() {
					if (!tflite || isSIMDSupported && !tfliteSIMD || !isSIMDSupported && segmentationConfig.backend === 'wasmSimd' || segmentationConfig.model !== 'meet') {
						return;
					}

					setSelectedTFLite(undefined);
					const newSelectedTFLite = segmentationConfig.backend === 'wasmSimd' ? tfliteSIMD : tflite;

					if (!newSelectedTFLite) {
						throw new Error(`TFLite backend unavailable: ${segmentationConfig.backend}`);
					}

					const modelFileName = segmentationConfig.inputResolution === '144p' ? 'segm_full_v679' : 'segm_lite_v681';
					console.log('Loading meet model:', modelFileName);
					const modelResponse = await fetch(`${"/public"}/models/${modelFileName}.tflite`);
					const model = await modelResponse.arrayBuffer();
					console.log('Model buffer size:', model.byteLength);

					const modelBufferOffset = newSelectedTFLite._getModelBufferMemoryOffset();

					console.log('Model buffer memory offset:', modelBufferOffset);
					console.log('Loading model buffer...');
					newSelectedTFLite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);
					console.log('_loadModel result:', newSelectedTFLite._loadModel(model.byteLength));
					console.log('Input memory offset:', newSelectedTFLite._getInputMemoryOffset());
					console.log('Input height:', newSelectedTFLite._getInputHeight());
					console.log('Input width:', newSelectedTFLite._getInputWidth());
					console.log('Input channels:', newSelectedTFLite._getInputChannelCount());
					console.log('Output memory offset:', newSelectedTFLite._getOutputMemoryOffset());
					console.log('Output height:', newSelectedTFLite._getOutputHeight());
					console.log('Output width:', newSelectedTFLite._getOutputWidth());
					console.log('Output channels:', newSelectedTFLite._getOutputChannelCount());
					setSelectedTFLite(newSelectedTFLite);
				}

				loadMeetModel();
			}, [tflite, tfliteSIMD, isSIMDSupported, segmentationConfig.model, segmentationConfig.backend, segmentationConfig.inputResolution]);
			return {
				tflite: selectedTFLite,
				isSIMDSupported
			};
		}

		useTFLite_s(useTFLite, "2gtuc/eZHnTFFb/84IzOS8RCUZ0=");

		/* harmony default export */
		var hooks_useTFLite = (useTFLite);
// CONCATENATED MODULE: ./src/App.tsx
		var App_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\App.tsx",
			App_s = createSignatureFunctionForTransform();


		function App() {
			App_s();

			const classes = App_useStyles();
			const [sourceConfig, setSourceConfig] = Object(react["useState"])({
				type: 'image',
				url: sourceImageUrls[0]
			});
			const [backgroundConfig, setBackgroundConfig] = Object(react["useState"])({
				type: 'image',
				url: backgroundImageUrls[0]
			});
			const [segmentationConfig, setSegmentationConfig] = Object(react["useState"])({
				model: 'meet',
				backend: 'wasm',
				inputResolution: '96p',
				pipeline: 'webgl2'
			});
			const [postProcessingConfig, setPostProcessingConfig] = Object(react["useState"])({
				smoothSegmentationMask: true,
				jointBilateralFilter: {
					sigmaSpace: 1,
					sigmaColor: 0.1
				},
				coverage: [0.5, 0.75],
				lightWrapping: 0.3,
				blendMode: 'screen'
			});
			const bodyPix = hooks_useBodyPix();
			const {
				tflite,
				isSIMDSupported
			} = hooks_useTFLite(segmentationConfig);
			Object(react["useEffect"])(() => {
				setSegmentationConfig(previousSegmentationConfig => {
					if (previousSegmentationConfig.backend === 'wasm' && isSIMDSupported) {
						return {
							...previousSegmentationConfig,
							backend: 'wasmSimd'
						};
					} else {
						return previousSegmentationConfig;
					}
				});
			}, [isSIMDSupported]);
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: classes.root,
				children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_ViewerCard, {
					sourceConfig: sourceConfig,
					backgroundConfig: backgroundConfig,
					segmentationConfig: segmentationConfig,
					postProcessingConfig: postProcessingConfig,
					bodyPix: bodyPix,
					tflite: tflite
				}, void 0, false, {
					fileName: App_jsxFileName,
					lineNumber: 63,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SourceConfigCard, {
					config: sourceConfig,
					onChange: setSourceConfig
				}, void 0, false, {
					fileName: App_jsxFileName,
					lineNumber: 71,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_BackgroundConfigCard, {
					config: backgroundConfig,
					onChange: setBackgroundConfig
				}, void 0, false, {
					fileName: App_jsxFileName,
					lineNumber: 72,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_SegmentationConfigCard, {
					config: segmentationConfig,
					isSIMDSupported: isSIMDSupported,
					onChange: setSegmentationConfig
				}, void 0, false, {
					fileName: App_jsxFileName,
					lineNumber: 76,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(components_PostProcessingConfigCard, {
					config: postProcessingConfig,
					pipeline: segmentationConfig.pipeline,
					onChange: setPostProcessingConfig
				}, void 0, false, {
					fileName: App_jsxFileName,
					lineNumber: 81,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: App_jsxFileName,
				lineNumber: 62,
				columnNumber: 5
			}, this);
		}

		App_s(App, "GRwCSVy+t4vYgmVRxwpZrpRRGwI=", false, function () {
			return [App_useStyles, hooks_useBodyPix, hooks_useTFLite];
		});

		App_c = App;
		const App_useStyles = Object(makeStyles["a" /* default */])(theme => Object(createStyles["a" /* default */])({
			root: {
				display: 'grid',
				[theme.breakpoints.up('xs')]: {
					margin: theme.spacing(1),
					gap: theme.spacing(1),
					gridTemplateColumns: '1fr'
				},
				[theme.breakpoints.up('md')]: {
					margin: theme.spacing(2),
					gap: theme.spacing(2),
					gridTemplateColumns: 'repeat(2, 1fr)'
				},
				[theme.breakpoints.up('lg')]: {
					gridTemplateColumns: 'repeat(3, 1fr)'
				}
			},
			resourceSelectionCards: {
				display: 'flex',
				flexDirection: 'column'
			}
		}));
		/* harmony default export */
		var src_App = (App);

		var App_c;

		register(App_c, "App");
// CONCATENATED MODULE: ./src/reportWebVitals.ts
		const reportWebVitals = onPerfEntry => {
			if (onPerfEntry && onPerfEntry instanceof Function) {
				__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! web-vitals */ 391)).then(({
					                                                                                                           getCLS,
					                                                                                                           getFID,
					                                                                                                           getFCP,
					                                                                                                           getLCP,
					                                                                                                           getTTFB
				                                                                                                           }) => {
					getCLS(onPerfEntry);
					getFID(onPerfEntry);
					getFCP(onPerfEntry);
					getLCP(onPerfEntry);
					getTTFB(onPerfEntry);
				});
			}
		};

		/* harmony default export */
		var src_reportWebVitals = (reportWebVitals);
// CONCATENATED MODULE: ./src/index.tsx
		var src_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\index.tsx";


		react_dom_default.a.render( /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(react_default.a.StrictMode, {
			children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(CssBaseline["a" /* default */], {}, void 0, false, {
				fileName: src_jsxFileName,
				lineNumber: 9,
				columnNumber: 5
			}, undefined), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(src_App, {}, void 0, false, {
				fileName: src_jsxFileName,
				lineNumber: 10,
				columnNumber: 5
			}, undefined)]
		}, void 0, true, {
			fileName: src_jsxFileName,
			lineNumber: 8,
			columnNumber: 3
		}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

		src_reportWebVitals();

		/***/
	})

}, [[332, 1, 2]]]);
