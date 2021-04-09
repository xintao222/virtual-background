(this["webpackJsonpvirtual-background"] = this["webpackJsonpvirtual-background"] || []).push([["main"], {

	/***/ "./src/App.tsx":
	/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
			/* harmony import */
			var _core_components_BackgroundConfigCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/BackgroundConfigCard */ "./src/core/components/BackgroundConfigCard.tsx");
			/* harmony import */
			var _core_components_PostProcessingConfigCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/PostProcessingConfigCard */ "./src/core/components/PostProcessingConfigCard.tsx");
			/* harmony import */
			var _core_components_SegmentationConfigCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/SegmentationConfigCard */ "./src/core/components/SegmentationConfigCard.tsx");
			/* harmony import */
			var _core_components_SourceConfigCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/SourceConfigCard */ "./src/core/components/SourceConfigCard.tsx");
			/* harmony import */
			var _core_components_ViewerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/ViewerCard */ "./src/core/components/ViewerCard.tsx");
			/* harmony import */
			var _core_helpers_backgroundHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/backgroundHelper */ "./src/core/helpers/backgroundHelper.ts");
			/* harmony import */
			var _core_helpers_sourceHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/helpers/sourceHelper */ "./src/core/helpers/sourceHelper.ts");
			/* harmony import */
			var _core_hooks_useBodyPix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/hooks/useBodyPix */ "./src/core/hooks/useBodyPix.ts");
			/* harmony import */
			var _core_hooks_useTFLite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/hooks/useTFLite */ "./src/core/hooks/useTFLite.ts");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\App.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function App() {
				_s();

				const classes = useStyles();
				const [sourceConfig, setSourceConfig] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
					type: 'image',
					url: _core_helpers_sourceHelper__WEBPACK_IMPORTED_MODULE_8__["sourceImageUrls"][0]
				});
				const [backgroundConfig, setBackgroundConfig] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
					type: 'image',
					url: _core_helpers_backgroundHelper__WEBPACK_IMPORTED_MODULE_7__["backgroundImageUrls"][0]
				});
				const [segmentationConfig, setSegmentationConfig] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
					model: 'meet',
					backend: 'wasm',
					inputResolution: '96p',
					pipeline: 'webgl2'
				});
				const [postProcessingConfig, setPostProcessingConfig] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
					smoothSegmentationMask: true,
					jointBilateralFilter: {
						sigmaSpace: 1,
						sigmaColor: 0.1
					},
					coverage: [0.5, 0.75],
					lightWrapping: 0.3,
					blendMode: 'screen'
				});
				const bodyPix = Object(_core_hooks_useBodyPix__WEBPACK_IMPORTED_MODULE_9__["default"])();
				const {
					tflite,
					isSIMDSupported
				} = Object(_core_hooks_useTFLite__WEBPACK_IMPORTED_MODULE_10__["default"])(segmentationConfig);
				Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
					className: classes.root,
					children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_core_components_ViewerCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
						sourceConfig: sourceConfig,
						backgroundConfig: backgroundConfig,
						segmentationConfig: segmentationConfig,
						postProcessingConfig: postProcessingConfig,
						bodyPix: bodyPix,
						tflite: tflite
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 7
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_core_components_SourceConfigCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
						config: sourceConfig,
						onChange: setSourceConfig
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 7
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_core_components_BackgroundConfigCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
						config: backgroundConfig,
						onChange: setBackgroundConfig
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 7
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_core_components_SegmentationConfigCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
						config: segmentationConfig,
						isSIMDSupported: isSIMDSupported,
						onChange: setSegmentationConfig
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 7
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_core_components_PostProcessingConfigCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
						config: postProcessingConfig,
						pipeline: segmentationConfig.pipeline,
						onChange: setPostProcessingConfig
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 5
				}, this);
			}

			_s(App, "GRwCSVy+t4vYgmVRxwpZrpRRGwI=", false, function () {
				return [useStyles, _core_hooks_useBodyPix__WEBPACK_IMPORTED_MODULE_9__["default"], _core_hooks_useTFLite__WEBPACK_IMPORTED_MODULE_10__["default"]];
			});

			_c = App;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
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
			__webpack_exports__["default"] = (App);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "App");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/BackgroundConfigCard.tsx":
	/*!******************************************************!*\
  !*** ./src/core/components/BackgroundConfigCard.tsx ***!
  \******************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
			/* harmony import */
			var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
			/* harmony import */
			var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Block */ "./node_modules/@material-ui/icons/Block.js");
			/* harmony import */
			var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_4__);
			/* harmony import */
			var _material_ui_icons_BlurOn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/BlurOn */ "./node_modules/@material-ui/icons/BlurOn.js");
			/* harmony import */
			var _material_ui_icons_BlurOn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BlurOn__WEBPACK_IMPORTED_MODULE_5__);
			/* harmony import */
			var _shared_components_ImageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/ImageButton */ "./src/shared/components/ImageButton.tsx");
			/* harmony import */
			var _shared_components_SelectionIconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/SelectionIconButton */ "./src/shared/components/SelectionIconButton.tsx");
			/* harmony import */
			var _helpers_backgroundHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/backgroundHelper */ "./src/core/helpers/backgroundHelper.ts");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\BackgroundConfigCard.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function BackgroundConfigCard(props) {
				_s();

				const classes = useStyles();
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
					className: classes.root,
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
						children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
							gutterBottom: true,
							variant: "h6",
							component: "h2",
							children: "Background"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 9
						}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_SelectionIconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
							active: props.config.type === 'none',
							onClick: () => props.onChange({
								type: 'none'
							}),
							children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 11
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 9
						}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_SelectionIconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
							active: props.config.type === 'blur',
							onClick: () => props.onChange({
								type: 'blur'
							}),
							children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_icons_BlurOn__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 11
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 9
						}, this), _helpers_backgroundHelper__WEBPACK_IMPORTED_MODULE_8__["backgroundImageUrls"].map(imageUrl => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_ImageButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
							imageUrl: imageUrl,
							active: imageUrl === props.config.url,
							onClick: () => props.onChange({
								type: 'image',
								url: imageUrl
							})
						}, imageUrl, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 11
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 5
				}, this);
			}

			_s(BackgroundConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = BackgroundConfigCard;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
				root: {
					flex: 1
				}
			}));
			/* harmony default export */
			__webpack_exports__["default"] = (BackgroundConfigCard);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "BackgroundConfigCard");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/OutputViewer.tsx":
	/*!**********************************************!*\
  !*** ./src/core/components/OutputViewer.tsx ***!
  \**********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
			/* harmony import */
			var _hooks_useRenderingPipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRenderingPipeline */ "./src/core/hooks/useRenderingPipeline.ts");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\OutputViewer.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function OutputViewer(props) {
				_s();

				const classes = useStyles();
				const {
					pipeline,
					backgroundImageRef,
					canvasRef,
					fps,
					durations: [resizingDuration, inferenceDuration, postProcessingDuration]
				} = Object(_hooks_useRenderingPipeline__WEBPACK_IMPORTED_MODULE_3__["default"])(props.sourcePlayback, props.backgroundConfig, props.segmentationConfig, props.bodyPix, props.tflite);
				Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
					if (pipeline) {
						pipeline.updatePostProcessingConfig(props.postProcessingConfig);
					}
				}, [pipeline, props.postProcessingConfig]);
				const statDetails = [`resizing ${resizingDuration}ms`, `inference ${inferenceDuration}ms`, `post-processing ${postProcessingDuration}ms`];
				const stats = `${Math.round(fps)} fps (${statDetails.join(', ')})`;
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
					className: classes.root,
					children: [props.backgroundConfig.type === 'image' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
						ref: backgroundImageRef,
						className: classes.render,
						src: props.backgroundConfig.url,
						alt: "",
						hidden: props.segmentationConfig.pipeline === 'webgl2'
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("canvas", {
						ref: canvasRef,
						className: classes.render,
						width: props.sourcePlayback.width,
						height: props.sourcePlayback.height
					}, props.segmentationConfig.pipeline, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 7
					}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
						className: classes.stats,
						variant: "caption",
						children: stats
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 5
				}, this);
			}

			_s(OutputViewer, "exVjBXd8At5D8Gt+1xp0J2QiUTc=", false, function () {
				return [useStyles, _hooks_useRenderingPipeline__WEBPACK_IMPORTED_MODULE_3__["default"]];
			});

			_c = OutputViewer;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
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
			__webpack_exports__["default"] = (OutputViewer);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "OutputViewer");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/PostProcessingConfigCard.tsx":
	/*!**********************************************************!*\
  !*** ./src/core/components/PostProcessingConfigCard.tsx ***!
  \**********************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
			/* harmony import */
			var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
			/* harmony import */
			var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
			/* harmony import */
			var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
			/* harmony import */
			var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
			/* harmony import */
			var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
			/* harmony import */
			var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
			/* harmony import */
			var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
			/* harmony import */
			var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\PostProcessingConfigCard.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function PostProcessingConfigCard(props) {
				_s();

				const classes = useStyles();

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

				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
						children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
							gutterBottom: true,
							variant: "h6",
							component: "h2",
							children: "Post-processing"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 9
						}, this), props.pipeline === 'webgl2' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
							children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								gutterBottom: true,
								children: "Joint bilateral filter"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								variant: "body2",
								children: "Sigma space"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
								value: props.config.jointBilateralFilter.sigmaSpace,
								min: 0,
								max: 10,
								step: 0.1,
								valueLabelDisplay: "auto",
								onChange: handleSigmaSpaceChange
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								variant: "body2",
								children: "Sigma color"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
								value: props.config.jointBilateralFilter.sigmaColor,
								min: 0,
								max: 1,
								step: 0.01,
								valueLabelDisplay: "auto",
								onChange: handleSigmaColorChange
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								gutterBottom: true,
								children: "Background"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								variant: "body2",
								children: "Coverage"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
								value: props.config.coverage,
								min: 0,
								max: 1,
								step: 0.01,
								valueLabelDisplay: "auto",
								onChange: handleCoverageChange
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
								variant: "body2",
								gutterBottom: true,
								children: "Light wrapping"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 13
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
								className: classes.lightWrapping,
								children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
									className: classes.formControl,
									variant: "outlined",
									children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
										children: "Blend mode"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 17
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
										label: "Blend mode",
										value: props.config.blendMode,
										onChange: handleBlendModeChange,
										children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
											value: "screen",
											children: "Screen"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 126,
											columnNumber: 19
										}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
											value: "linearDodge",
											children: "Linear dodge"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 127,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 15
								}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
									value: props.config.lightWrapping,
									min: 0,
									max: 1,
									step: 0.01,
									valueLabelDisplay: "auto",
									onChange: handleLightWrappingChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 11
						}, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
							label: "Smooth segmentation mask",
							control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__["default"], {
								color: "primary",
								checked: props.config.smoothSegmentationMask,
								onChange: handleSmoothSegmentationMaskChange
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 5
				}, this);
			}

			_s(PostProcessingConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = PostProcessingConfigCard;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
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
			__webpack_exports__["default"] = (PostProcessingConfigCard);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "PostProcessingConfigCard");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/SegmentationConfigCard.tsx":
	/*!********************************************************!*\
  !*** ./src/core/components/SegmentationConfigCard.tsx ***!
  \********************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
			/* harmony import */
			var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
			/* harmony import */
			var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
			/* harmony import */
			var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
			/* harmony import */
			var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
			/* harmony import */
			var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			debugger
			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\SegmentationConfigCard.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function SegmentationConfigCard(props) {
				_s();

				const classes = useStyles();

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

				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
					className: classes.root,
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
						children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
							gutterBottom: true,
							variant: "h6",
							component: "h2",
							children: "Segmentation"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 9
						}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
							className: classes.formControls,
							children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
								className: classes.formControl,
								variant: "outlined",
								children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
									children: "Model"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 13
								}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
									label: "Model",
									value: props.config.model,
									onChange: handleModelChange,
									children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "meet",
										children: "Meet"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "bodyPix",
										children: "BodyPix"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 83,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 11
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
								className: classes.formControl,
								variant: "outlined",
								children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
									children: "Backend"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 13
								}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
									label: "Backend",
									value: props.config.backend,
									onChange: handleBackendChange,
									children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "wasm",
										disabled: props.config.model === 'bodyPix',
										children: "WebAssembly"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "wasmSimd",
										disabled: props.config.model === 'bodyPix' || !props.isSIMDSupported,
										children: "WebAssembly SIMD"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 105,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "webgl",
										disabled: props.config.model === 'meet',
										children: "WebGL"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 11
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
								className: classes.formControl,
								variant: "outlined",
								children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
									children: "Input resolution"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 13
								}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
									label: "Input resolution",
									value: props.config.inputResolution,
									onChange: handleInputResolutionChange,
									children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "360p",
										disabled: props.config.model === 'meet',
										children: "360p"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "144p",
										disabled: props.config.model === 'bodyPix',
										children: "144p"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "96p",
										disabled: props.config.model === 'bodyPix',
										children: "96p"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 11
							}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
								className: classes.formControl,
								variant: "outlined",
								children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
									children: "Pipeline"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 13
								}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
									label: "Pipeline",
									value: props.config.pipeline,
									onChange: handlePipelineChange,
									children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "webgl2",
										disabled: props.config.model === 'bodyPix',
										children: "WebGL 2"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 15
									}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
										value: "canvas2dCpu",
										children: "Canvas 2D + CPU"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 11
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 9
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 5
				}, this);
			}

			_s(SegmentationConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = SegmentationConfigCard;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
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
			__webpack_exports__["default"] = (SegmentationConfigCard);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "SegmentationConfigCard");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/SourceConfigCard.tsx":
	/*!**************************************************!*\
  !*** ./src/core/components/SourceConfigCard.tsx ***!
  \**************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
			/* harmony import */
			var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
			/* harmony import */
			var _material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Videocam */ "./node_modules/@material-ui/icons/Videocam.js");
			/* harmony import */
			var _material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_4__);
			/* harmony import */
			var _shared_components_ImageButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/ImageButton */ "./src/shared/components/ImageButton.tsx");
			/* harmony import */
			var _shared_components_SelectionIconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/SelectionIconButton */ "./src/shared/components/SelectionIconButton.tsx");
			/* harmony import */
			var _shared_components_VideoButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/VideoButton */ "./src/shared/components/VideoButton.tsx");
			/* harmony import */
			var _helpers_sourceHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/sourceHelper */ "./src/core/helpers/sourceHelper.ts");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\SourceConfigCard.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function SourceConfigCard(props) {
				_s();

				const classes = useStyles();
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
					className: classes.root,
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
						children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
							gutterBottom: true,
							variant: "h6",
							component: "h2",
							children: "Source"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 9
						}, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_SelectionIconButton__WEBPACK_IMPORTED_MODULE_6__["default"],
							{
							active: props.config.type === 'camera',
							onClick: () => props.onChange({type: 'camera'}),
							children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 11
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 9
						}, this), _helpers_sourceHelper__WEBPACK_IMPORTED_MODULE_8__["sourceImageUrls"].map(imageUrl => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_ImageButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
							imageUrl: imageUrl,
							active: imageUrl === props.config.url,
							onClick: () => props.onChange({
								type: 'image',
								url: imageUrl
							})
						}, imageUrl, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this)), _helpers_sourceHelper__WEBPACK_IMPORTED_MODULE_8__["sourceVideoUrls"].map(videoUrl => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_shared_components_VideoButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
							videoUrl: videoUrl,
							active: videoUrl === props.config.url,
							onClick: () => props.onChange({
								type: 'video',
								url: videoUrl
							})
						}, videoUrl, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 11
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 5
				}, this);
			}

			_s(SourceConfigCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = SourceConfigCard;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
				root: {
					flex: 1
				}
			}));
			/* harmony default export */
			__webpack_exports__["default"] = (SourceConfigCard);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "SourceConfigCard");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/SourceViewer.tsx":
	/*!**********************************************!*\
  !*** ./src/core/components/SourceViewer.tsx ***!
  \**********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_icons_VideocamOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VideocamOff */ "./node_modules/@material-ui/icons/VideocamOff.js");
			/* harmony import */
			var _material_ui_icons_VideocamOff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideocamOff__WEBPACK_IMPORTED_MODULE_2__);
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\SourceViewer.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function SourceViewer(props) {
				_s();

				const classes = useStyles();
				const [sourceUrl, setSourceUrl] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
				const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
				const [isCameraError, setCameraError] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
				const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
				Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
					setSourceUrl(undefined);
					setLoading(true);
					setCameraError(false); // Enforces reloading the resource, otherwise
					// onLoad event is not always dispatched and the
					// progress indicator never disappears

					setTimeout(() => setSourceUrl(props.sourceConfig.url));
				}, [props.sourceConfig]);
				Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
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

				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
					className: classes.root,
					children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 21
					}, this), props.sourceConfig.type === 'image' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
						className: classes.sourcePlayback,
						src: sourceUrl,
						hidden: isLoading,
						alt: "",
						onLoad: handleImageLoad
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 9
					}, this) : isCameraError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_icons_VideocamOff__WEBPACK_IMPORTED_MODULE_2___default.a, {
						fontSize: "large"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 9
					}, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("video", {
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
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 5
				}, this);
			}

			_s(SourceViewer, "7+UEpgAajicL1qRahzdiXW5HIM4=", false, function () {
				return [useStyles];
			});

			_c = SourceViewer;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
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
			__webpack_exports__["default"] = (SourceViewer);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "SourceViewer");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/components/ViewerCard.tsx":
	/*!********************************************!*\
  !*** ./src/core/components/ViewerCard.tsx ***!
  \********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
			/* harmony import */
			var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
			/* harmony import */
			var _OutputViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OutputViewer */ "./src/core/components/OutputViewer.tsx");
			/* harmony import */
			var _SourceViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceViewer */ "./src/core/components/SourceViewer.tsx");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\core\\components\\ViewerCard.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function ViewerCard(props) {
				_s();

				const classes = useStyles();
				const [sourcePlayback, setSourcePlayback] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
				Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
					setSourcePlayback(undefined);
				}, [props.sourceConfig]);
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
					className: classes.root,
					children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_SourceViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
						sourceConfig: props.sourceConfig,
						onLoad: setSourcePlayback
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 7
					}, this), sourcePlayback && props.bodyPix && props.tflite ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_OutputViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
						sourcePlayback: sourcePlayback,
						backgroundConfig: props.backgroundConfig,
						segmentationConfig: props.segmentationConfig,
						postProcessingConfig: props.postProcessingConfig,
						bodyPix: props.bodyPix,
						tflite: props.tflite
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 9
					}, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
						className: classes.noOutput,
						children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], {
							className: classes.avatar
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 5
				}, this);
			}

			_s(ViewerCard, "BF5+Hx0pqwbDNha7+ltEoFFTAiI=", false, function () {
				return [useStyles];
			});

			_c = ViewerCard;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => {
				const minHeight = [`${theme.spacing(52)}px`, `100vh - ${theme.spacing(2)}px`];
				return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
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
			__webpack_exports__["default"] = (ViewerCard);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "ViewerCard");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/helpers/backgroundHelper.ts":
	/*!**********************************************!*\
  !*** ./src/core/helpers/backgroundHelper.ts ***!
  \**********************************************/
	/*! exports provided: backgroundImageUrls */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "backgroundImageUrls", function () {
				return backgroundImageUrls;
			});
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			const backgroundImageUrls = [
				'architecture-5082700_1280',
				'porch-691330_1280',
				'saxon-switzerland-539418_1280',
				'shibuyasky-4768679_1280'
			].map(imageName => `${"/public"}/backgrounds/${imageName}.jpg`);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/helpers/segmentationHelper.ts":
	/*!************************************************!*\
  !*** ./src/core/helpers/segmentationHelper.ts ***!
  \************************************************/
	/*! exports provided: inputResolutions */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "inputResolutions", function () {
				return inputResolutions;
			});
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			const inputResolutions = {
				'360p': [640, 360],
				'144p': [256, 144],
				'96p': [160, 96]
			};

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/helpers/sourceHelper.ts":
	/*!******************************************!*\
  !*** ./src/core/helpers/sourceHelper.ts ***!
  \******************************************/
	/*! exports provided: sourceImageUrls, sourceVideoUrls */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "sourceImageUrls", function () {
				return sourceImageUrls;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "sourceVideoUrls", function () {
				return sourceVideoUrls;
			});
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			const sourceImageUrls = ['girl-919048_1280', 'doctor-5871743_640', 'woman-5883428_1280'].map(imageName => `${"/public"}/images/${imageName}.jpg`);
			const sourceVideoUrls = ['Dance - 32938', 'Doctor - 26732', 'Thoughtful - 35590'].map(videoName => `${"/public"}/videos/${videoName}.mp4`);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/hooks/useBodyPix.ts":
	/*!**************************************!*\
  !*** ./src/core/hooks/useBodyPix.ts ***!
  \**************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _tensorflow_models_body_pix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow-models/body-pix */ "./node_modules/@tensorflow-models/body-pix/dist/body-pix.esm.js");
			/* harmony import */
			var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();


			function useBodyPix() {
				_s();

				const [bodyPix, setBodyPix] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
				Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
					async function loadBodyPix() {
						console.warn('Loading TensorFlow.js and BodyPix segmentation model');
						console.warn('1111111111')
						await _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["ready"]();
						console.warn('2222222222')
						setBodyPix(await _tensorflow_models_body_pix__WEBPACK_IMPORTED_MODULE_0__["load"]());
						console.warn('等待这里加载完成后才开始渲染虚拟背景结果。。。。')
						console.log('TensorFlow.js and BodyPix loaded');
					}

					loadBodyPix();
				}, []);
				return bodyPix;
			}

			_s(useBodyPix, "GbEnrZKCrcdijtZsXRLRLzSRhDo=");

			/* harmony default export */
			__webpack_exports__["default"] = (useBodyPix);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/hooks/useRenderingPipeline.ts":
	/*!************************************************!*\
  !*** ./src/core/hooks/useRenderingPipeline.ts ***!
  \************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict"
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
			/* harmony import */
			var _pipelines_canvas2d_canvas2dPipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipelines/canvas2d/canvas2dPipeline */ "./src/pipelines/canvas2d/canvas2dPipeline.ts");
			/* harmony import */
			var _pipelines_webgl2_webgl2Pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipelines/webgl2/webgl2Pipeline */ "./src/pipelines/webgl2/webgl2Pipeline.ts");
			/* harmony import */
			var _useStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useStats */ "./src/core/hooks/useStats.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();


			/**
			 * 使用渲染管道
			 * @param sourcePlayback
			 * {
			 *      height: 480,
					htmlElement: video.makeStyles-sourcePlayback-7,
					width: 640,
			 * }
			 * @param backgroundConfig
			 * {
			 *      type: "image"
					url: "/public/backgrounds/architecture-5082700_1280.jpg"
			 * }
			 * @param segmentationConfig
			 * {
			 *      backend: "wasm",
					inputResolution: "96p",
					model: "meet",
					pipeline: "webgl2",
			 * }
			 * @param bodyPix
			 * {
			 *      baseModel: t {model: GraphModel, outputStride: 16}
			 * }
			 * @param tflite
			 * @returns {{pipeline: *, canvasRef: *, fps: *, durations: *, backgroundImageRef: *}}
			 */
			function useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite) {
				_s();

				const [pipeline, setPipeline] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
				const backgroundImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
				const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
				const {fps, durations, beginFrame, addFrameEvent, endFrame} = Object(_useStats__WEBPACK_IMPORTED_MODULE_3__["default"])();

				Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
					// The useEffect cleanup function is not enough to stop
					// the rendering loop when the framerate is low
					let shouldRender = true;
					let renderRequestId;
					const newPipeline = segmentationConfig.pipeline === 'webgl2'
						? Object(_pipelines_webgl2_webgl2Pipeline__WEBPACK_IMPORTED_MODULE_2__["buildWebGL2Pipeline"])(
							sourcePlayback,
							backgroundImageRef.current,
							backgroundConfig,
							segmentationConfig,
							canvasRef.current,
							tflite,
							addFrameEvent
						)
						: Object(_pipelines_canvas2d_canvas2dPipeline__WEBPACK_IMPORTED_MODULE_1__["buildCanvas2dPipeline"])(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef.current, bodyPix, tflite, addFrameEvent);

					console.warn('sourcePlayback: ', sourcePlayback)
					console.warn('backgroundConfig: ', backgroundConfig)
					console.warn('segmentationConfig: ', segmentationConfig)
					console.warn('bodyPix: ', bodyPix)
					console.warn('tflite: ', tflite)

					console.warn("newPipeline: ", newPipeline)
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
						console.log('Animation stopped:', sourcePlayback, backgroundConfig, segmentationConfig);
						setPipeline(null);
					};
				}, [sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite, setPipeline, beginFrame, addFrameEvent, endFrame]);


				return {pipeline, backgroundImageRef, canvasRef, fps, durations};
			}

			_s(useRenderingPipeline, "g8OH87YpvRSJzyCpqKJgzm1Z7I8=", false, function () {
				return [_useStats__WEBPACK_IMPORTED_MODULE_3__["default"]];
			});

			/* harmony default export */
			__webpack_exports__["default"] = (useRenderingPipeline);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/hooks/useStats.ts":
	/*!************************************!*\
  !*** ./src/core/hooks/useStats.ts ***!
  \************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();


			function useStats() {
				_s();

				const [fps, setFps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
				const [durations, setDurations] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
				const previousTimeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
				const beginTimeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
				const durationsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
				const eventCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
				const frameCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0); // The useCallbacks below are required to prevent infinite loop
				// when the functions are called inside useEffect

				const beginFrame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
					beginTimeRef.current = Date.now();
				}, []);
				const addFrameEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
					const time = Date.now();
					durationsRef.current[eventCount.current] = time - beginTimeRef.current;
					beginTimeRef.current = time;
					eventCount.current++;
				}, []);
				const endFrame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
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
				return {
					fps,
					durations,
					beginFrame,
					addFrameEvent,
					endFrame
				};
			}

			_s(useStats, "OYaQh1/wbO0sY6LqQebi+5QHbjI=");

			/* harmony default export */
			__webpack_exports__["default"] = (useStats);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/core/hooks/useTFLite.ts":
	/*!*************************************!*\
  !*** ./src/core/hooks/useTFLite.ts ***!
  \*************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();


			function useTFLite(segmentationConfig) {
				_s();

				const [tflite, setTFLite] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
				const [tfliteSIMD, setTFLiteSIMD] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
				const [selectedTFLite, setSelectedTFLite] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
				const [isSIMDSupported, setSIMDSupported] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
				Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
				Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

			_s(useTFLite, "2gtuc/eZHnTFFb/84IzOS8RCUZ0=");

			/* harmony default export */
			__webpack_exports__["default"] = (useTFLite);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/index.tsx":
	/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
	/*! no exports provided */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
			/* harmony import */
			var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
			/* harmony import */
			var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
			/* harmony import */
			var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
			/* harmony import */
			var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.ts");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\index.tsx";


			react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
				children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 5
				}, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 5
				}, undefined)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 3
			}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

			Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/canvas2d/canvas2dPipeline.ts":
	/*!****************************************************!*\
  !*** ./src/pipelines/canvas2d/canvas2dPipeline.ts ***!
  \****************************************************/
	/*! exports provided: buildCanvas2dPipeline */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildCanvas2dPipeline", function () {
				return buildCanvas2dPipeline;
			});
			/* harmony import */
			var _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/helpers/segmentationHelper */ "./src/core/helpers/segmentationHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);


			function buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvas, bodyPix, tflite, addFrameEvent) {
				const ctx = canvas.getContext('2d');
				console.warn("canvas: ", canvas)
				const [segmentationWidth, segmentationHeight] = _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__["inputResolutions"][segmentationConfig.inputResolution];
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

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/helpers/webglHelper.ts":
	/*!**********************************************!*\
  !*** ./src/pipelines/helpers/webglHelper.ts ***!
  \**********************************************/
	/*! exports provided: glsl, createPiplelineStageProgram, createProgram, compileShader, createTexture, readPixelsAsync */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "glsl", function () {
				return glsl;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "createPiplelineStageProgram", function () {
				return createPiplelineStageProgram;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "createProgram", function () {
				return createProgram;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "compileShader", function () {
				return compileShader;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "createTexture", function () {
				return createTexture;
			});
			/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "readPixelsAsync", function () {
				return readPixelsAsync;
			});
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

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

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/backgroundBlurStage.ts":
	/*!*****************************************************!*\
  !*** ./src/pipelines/webgl2/backgroundBlurStage.ts ***!
  \*****************************************************/
	/*! exports provided: buildBackgroundBlurStage */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildBackgroundBlurStage", function () {
				return buildBackgroundBlurStage;
			});
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s2 = __webpack_require__.$Refresh$.signature();


			function buildBackgroundBlurStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) {
				_s2();

				var _s = __webpack_require__.$Refresh$.signature();

				const vertexShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#version 300 es

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
				const fragmentShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#version 300 es

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
				const vertexShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["compileShader"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
				const fragmentShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["compileShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
				const program = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["createPiplelineStageProgram"])(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
				const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
				const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
				const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
				const flipYLocation = gl.getUniformLocation(program, 'u_flipY');
				const texture1 = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["createTexture"])(gl, gl.RGBA8, outputWidth, outputHeight);
				const texture2 = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["createTexture"])(gl, gl.RGBA8, outputWidth, outputHeight);
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

			_s2(buildBackgroundBlurStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/backgroundImageStage.ts":
	/*!******************************************************!*\
  !*** ./src/pipelines/webgl2/backgroundImageStage.ts ***!
  \******************************************************/
	/*! exports provided: buildBackgroundImageStage */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildBackgroundImageStage", function () {
				return buildBackgroundImageStage;
			});
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s5 = __webpack_require__.$Refresh$.signature();


			function buildBackgroundImageStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas) {
				_s5();

				var _s = __webpack_require__.$Refresh$.signature(),
					_s2 = __webpack_require__.$Refresh$.signature(),
					_s3 = __webpack_require__.$Refresh$.signature(),
					_s4 = __webpack_require__.$Refresh$.signature();

				const vertexShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#version 300 es

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
				const fragmentShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#version 300 es

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
				const vertexShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["compileShader"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
				const fragmentShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["compileShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
				const program = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["createPiplelineStageProgram"])(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
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
					backgroundTexture = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_0__["createTexture"])(gl, gl.RGBA8, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.LINEAR, gl.LINEAR);
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

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/jointBilateralFilterStage.ts":
	/*!***********************************************************!*\
  !*** ./src/pipelines/webgl2/jointBilateralFilterStage.ts ***!
  \***********************************************************/
	/*! exports provided: buildJointBilateralFilterStage */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildJointBilateralFilterStage", function () {
				return buildJointBilateralFilterStage;
			});
			/* harmony import */
			var _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/helpers/segmentationHelper */ "./src/core/helpers/segmentationHelper.ts");
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s4 = __webpack_require__.$Refresh$.signature();


			function buildJointBilateralFilterStage(gl, vertexShader, positionBuffer, texCoordBuffer, inputTexture, segmentationConfig, outputTexture, canvas) {
				_s4();

				var _s = __webpack_require__.$Refresh$.signature(),
					_s2 = __webpack_require__.$Refresh$.signature(),
					_s3 = __webpack_require__.$Refresh$.signature();

				const fragmentShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#version 300 es

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
				const [segmentationWidth, segmentationHeight] = _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__["inputResolutions"][segmentationConfig.inputResolution];
				const {
					width: outputWidth,
					height: outputHeight
				} = canvas;
				const texelWidth = 1 / outputWidth;
				const texelHeight = 1 / outputHeight;
				const fragmentShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["compileShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
				const program = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createPiplelineStageProgram"])(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
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

			_s4(buildJointBilateralFilterStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/resizingStage.ts":
	/*!***********************************************!*\
  !*** ./src/pipelines/webgl2/resizingStage.ts ***!
  \***********************************************/
	/*! exports provided: buildResizingStage */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildResizingStage", function () {
				return buildResizingStage;
			});
			/* harmony import */
			var _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/helpers/segmentationHelper */ "./src/core/helpers/segmentationHelper.ts");
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s2 = __webpack_require__.$Refresh$.signature();


			function buildResizingStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite) {
				_s2();

				var _s = __webpack_require__.$Refresh$.signature();

				const fragmentShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      outColor = texture(u_inputFrame, v_texCoord);
    }
  `; // TFLite memory will be accessed as float32

				const tfliteInputMemoryOffset = tflite._getInputMemoryOffset() / 4;
				const [outputWidth, outputHeight] = _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__["inputResolutions"][segmentationConfig.inputResolution];
				const outputPixelCount = outputWidth * outputHeight;
				const fragmentShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["compileShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
				const program = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createPiplelineStageProgram"])(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
				const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
				const outputTexture = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createTexture"])(gl, gl.RGBA8, outputWidth, outputHeight);
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

					Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["readPixelsAsync"])(gl, 0, 0, outputWidth, outputHeight, gl.RGBA, gl.UNSIGNED_BYTE, outputPixels);

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

			_s2(buildResizingStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/softmaxStage.ts":
	/*!**********************************************!*\
  !*** ./src/pipelines/webgl2/softmaxStage.ts ***!
  \**********************************************/
	/*! exports provided: buildSoftmaxStage */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildSoftmaxStage", function () {
				return buildSoftmaxStage;
			});
			/* harmony import */
			var _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/helpers/segmentationHelper */ "./src/core/helpers/segmentationHelper.ts");
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s2 = __webpack_require__.$Refresh$.signature();


			function buildSoftmaxStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, outputTexture) {
				_s2();

				var _s = __webpack_require__.$Refresh$.signature();

				const fragmentShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#version 300 es

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
				const [segmentationWidth, segmentationHeight] = _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__["inputResolutions"][segmentationConfig.inputResolution];
				const fragmentShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["compileShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
				const program = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createPiplelineStageProgram"])(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
				const inputLocation = gl.getUniformLocation(program, 'u_inputSegmentation');
				const inputTexture = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createTexture"])(gl, gl.RG32F, segmentationWidth, segmentationHeight);
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

			_s2(buildSoftmaxStage, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/pipelines/webgl2/webgl2Pipeline.ts":
	/*!************************************************!*\
  !*** ./src/pipelines/webgl2/webgl2Pipeline.ts ***!
  \************************************************/
	/*! exports provided: buildWebGL2Pipeline */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "buildWebGL2Pipeline", function () {
				return buildWebGL2Pipeline;
			});
			/* harmony import */
			var _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/helpers/segmentationHelper */ "./src/core/helpers/segmentationHelper.ts");
			/* harmony import */
			var _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/webglHelper */ "./src/pipelines/helpers/webglHelper.ts");
			/* harmony import */
			var _backgroundBlurStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backgroundBlurStage */ "./src/pipelines/webgl2/backgroundBlurStage.ts");
			/* harmony import */
			var _backgroundImageStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundImageStage */ "./src/pipelines/webgl2/backgroundImageStage.ts");
			/* harmony import */
			var _jointBilateralFilterStage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jointBilateralFilterStage */ "./src/pipelines/webgl2/jointBilateralFilterStage.ts");
			/* harmony import */
			var _resizingStage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resizingStage */ "./src/pipelines/webgl2/resizingStage.ts");
			/* harmony import */
			var _softmaxStage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./softmaxStage */ "./src/pipelines/webgl2/softmaxStage.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);


			function buildWebGL2Pipeline(sourcePlayback, backgroundImage, backgroundConfig, segmentationConfig, canvas, tflite, addFrameEvent) {
				const vertexShaderSource = _helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#version 300 es

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
				const [segmentationWidth, segmentationHeight] = _core_helpers_segmentationHelper__WEBPACK_IMPORTED_MODULE_0__["inputResolutions"][segmentationConfig.inputResolution];
				const gl = canvas.getContext('webgl2');
				console.warn("canvas: ", canvas)
				const vertexShader = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["compileShader"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
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

				const segmentationTexture = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createTexture"])(gl, gl.RGBA8, segmentationWidth, segmentationHeight);
				const personMaskTexture = Object(_helpers_webglHelper__WEBPACK_IMPORTED_MODULE_1__["createTexture"])(gl, gl.RGBA8, frameWidth, frameHeight);
				const resizingStage = Object(_resizingStage__WEBPACK_IMPORTED_MODULE_5__["buildResizingStage"])(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite);
				const softmaxStage = Object(_softmaxStage__WEBPACK_IMPORTED_MODULE_6__["buildSoftmaxStage"])(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, segmentationTexture);
				const jointBilateralFilterStage = Object(_jointBilateralFilterStage__WEBPACK_IMPORTED_MODULE_4__["buildJointBilateralFilterStage"])(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationTexture, segmentationConfig, personMaskTexture, canvas);
				const backgroundStage = backgroundConfig.type === 'blur' ? Object(_backgroundBlurStage__WEBPACK_IMPORTED_MODULE_2__["buildBackgroundBlurStage"])(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) : Object(_backgroundImageStage__WEBPACK_IMPORTED_MODULE_3__["buildBackgroundImageStage"])(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas);

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

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/reportWebVitals.ts":
	/*!********************************!*\
  !*** ./src/reportWebVitals.ts ***!
  \********************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			const reportWebVitals = onPerfEntry => {
				if (onPerfEntry && onPerfEntry instanceof Function) {
					__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(({
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
			__webpack_exports__["default"] = (reportWebVitals);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/components/ImageButton.tsx":
	/*!***********************************************!*\
  !*** ./src/shared/components/ImageButton.tsx ***!
  \***********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _hooks_useImageThumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useImageThumbnail */ "./src/shared/hooks/useImageThumbnail.ts");
			/* harmony import */
			var _TumbnailButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TumbnailButton */ "./src/shared/components/TumbnailButton.tsx");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\shared\\components\\ImageButton.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function ImageButton(props) {
				_s();

				const [thumbnailUrl, revokeThumbnailUrl] = Object(_hooks_useImageThumbnail__WEBPACK_IMPORTED_MODULE_0__["default"])(props.imageUrl);
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_TumbnailButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
					thumbnailUrl: thumbnailUrl,
					active: props.active,
					onClick: props.onClick,
					onLoad: revokeThumbnailUrl
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 5
				}, this);
			}

			_s(ImageButton, "fQiE+KO1B3UR3n+x9aD4aQNT+/Y=", false, function () {
				return [_hooks_useImageThumbnail__WEBPACK_IMPORTED_MODULE_0__["default"]];
			});

			_c = ImageButton;
			/* harmony default export */
			__webpack_exports__["default"] = (ImageButton);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "ImageButton");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/components/SelectionButton.tsx":
	/*!***************************************************!*\
  !*** ./src/shared/components/SelectionButton.tsx ***!
  \***************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
			/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\shared\\components\\SelectionButton.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function SelectionButton(props) {
				_s();

				const classes = useStyles();
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
					className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, props.active && classes.active),
					disabled: props.disabled,
					onClick: props.onClick,
					children: props.children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 5
				}, this);
			}

			_s(SelectionButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = SelectionButton;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
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
			__webpack_exports__["default"] = (SelectionButton);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "SelectionButton");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/components/SelectionIconButton.tsx":
	/*!*******************************************************!*\
  !*** ./src/shared/components/SelectionIconButton.tsx ***!
  \*******************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _SelectionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectionButton */ "./src/shared/components/SelectionButton.tsx");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\shared\\components\\SelectionIconButton.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function SelectionIconButton(props) {
				_s();

				const classes = useStyles();
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SelectionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
					active: props.active,
					onClick: props.onClick,
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
						className: classes.root,
						children: props.children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 5
				}, this);
			}

			_s(SelectionIconButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = SelectionIconButton;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
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
			__webpack_exports__["default"] = (SelectionIconButton);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "SelectionIconButton");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/components/TumbnailButton.tsx":
	/*!**************************************************!*\
  !*** ./src/shared/components/TumbnailButton.tsx ***!
  \**************************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
			/* harmony import */
			var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
			/* harmony import */
			var _SelectionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectionButton */ "./src/shared/components/SelectionButton.tsx");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\shared\\components\\TumbnailButton.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function ThumbnailButton(props) {
				_s();

				const classes = useStyles();
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_SelectionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
					active: !!props.thumbnailUrl && props.active,
					disabled: !props.thumbnailUrl,
					onClick: props.onClick,
					children: [props.thumbnailUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
						className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.scalableContent, classes.image),
						src: props.thumbnailUrl,
						alt: "",
						onLoad: props.onLoad
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 9
					}, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
						className: classes.scalableContent,
						variant: "rect"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 9
					}, this), props.children]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 5
				}, this);
			}

			_s(ThumbnailButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
				return [useStyles];
			});

			_c = ThumbnailButton;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
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
			__webpack_exports__["default"] = (ThumbnailButton);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "ThumbnailButton");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/components/VideoButton.tsx":
	/*!***********************************************!*\
  !*** ./src/shared/components/VideoButton.tsx ***!
  \***********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
			/* harmony import */
			var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/PlayCircleOutline */ "./node_modules/@material-ui/icons/PlayCircleOutline.js");
			/* harmony import */
			var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_1__);
			/* harmony import */
			var _hooks_useVideoThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useVideoThumbnail */ "./src/shared/hooks/useVideoThumbnail.ts");
			/* harmony import */
			var _TumbnailButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TumbnailButton */ "./src/shared/components/TumbnailButton.tsx");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
			/* harmony import */
			var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _jsxFileName = "D:\\github_learning\\virtual-background\\src\\shared\\components\\VideoButton.tsx",
				_s = __webpack_require__.$Refresh$.signature();


			function VideoButton(props) {
				_s();

				const classes = useStyles();
				const [thumbnailUrl, revokeThumbnailUrl] = Object(_hooks_useVideoThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"])(props.videoUrl);
				return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_TumbnailButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
					thumbnailUrl: thumbnailUrl,
					active: props.active,
					onClick: props.onClick,
					onLoad: revokeThumbnailUrl,
					children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_1___default.a, {
						className: classes.icon
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 5
				}, this);
			}

			_s(VideoButton, "rydJMLFnynNgoQkPrEvjYt4IJo8=", false, function () {
				return [useStyles, _hooks_useVideoThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"]];
			});

			_c = VideoButton;
			const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
				icon: {
					position: 'absolute',
					bottom: 0,
					right: 0,
					color: theme.palette.common.white
				}
			}));
			/* harmony default export */
			__webpack_exports__["default"] = (VideoButton);

			var _c;

			__webpack_require__.$Refresh$.register(_c, "VideoButton");

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/helpers/thumbnailHelper.ts":
	/*!***********************************************!*\
  !*** ./src/shared/helpers/thumbnailHelper.ts ***!
  \***********************************************/
	/*! exports provided: getThumbnailBlob */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */
			__webpack_require__.d(__webpack_exports__, "getThumbnailBlob", function () {
				return getThumbnailBlob;
			});
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

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
				console.warn("canvas: ", canvas)
				ctx.drawImage(source, horizontalShift, verticalShift, sourceSize, sourceSize, 0, 0, canvas.width, canvas.height);
				return new Promise(resolve => canvas.toBlob(blob => resolve(blob)));
			}

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/hooks/useImageThumbnail.ts":
	/*!***********************************************!*\
  !*** ./src/shared/hooks/useImageThumbnail.ts ***!
  \***********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
			/* harmony import */
			var _helpers_thumbnailHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( "./src/shared/helpers/thumbnailHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();
			/**
			 * Returns an image thumbnail URL and a function to revoke it.
			 */

			function useImageThumbnail(imageUrl) {
				_s();

				const [thumbnailUrl, setThumbnailUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
				Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
					const image = new Image();
					image.src = imageUrl;

					image.onload = async () => {
						const blob = await Object(_helpers_thumbnailHelper__WEBPACK_IMPORTED_MODULE_1__["getThumbnailBlob"])(image, image.naturalWidth, image.naturalHeight);
						setThumbnailUrl(URL.createObjectURL(blob));
					};
				}, [imageUrl]);
				return [thumbnailUrl, () => URL.revokeObjectURL(thumbnailUrl)];
			}

			_s(useImageThumbnail, "/XYfGJKl5w6emPDp5TJtaHpzT8E=");

			/* harmony default export */
			__webpack_exports__["default"] = (useImageThumbnail);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this
			, __webpack_require__( "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js")
			, __webpack_require__("./node_modules/react-dev-utils/refreshOverlayInterop.js")))

		/***/
	}),

	/***/ "./src/shared/hooks/useVideoThumbnail.ts":
	/*!***********************************************!*\
  !*** ./src/shared/hooks/useVideoThumbnail.ts ***!
  \***********************************************/
	/*! exports provided: default */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* WEBPACK VAR INJECTION */
		(function (__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
			/* harmony import */
			var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
			/* harmony import */
			var _helpers_thumbnailHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/thumbnailHelper */ "./src/shared/helpers/thumbnailHelper.ts");
			__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
			__webpack_require__.$Refresh$.setup(module.i);

			var _s = __webpack_require__.$Refresh$.signature();


			/**
			 * Returns a video thumbnail URL and a function to revoke it.
			 */

			function useVideoThumbnail(videoUrl) {
				_s();

				const [thumbnailUrl, setThumbnailUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
				Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
					const video = document.createElement('video');
					video.src = videoUrl;

					video.onloadedmetadata = () => {
						video.currentTime = video.duration / 2;
					};

					video.onseeked = async () => {
						const blob = await Object(_helpers_thumbnailHelper__WEBPACK_IMPORTED_MODULE_1__["getThumbnailBlob"])(video, video.videoWidth, video.videoHeight);
						setThumbnailUrl(URL.createObjectURL(blob));
					};
				}, [videoUrl]);
				return [thumbnailUrl, () => URL.revokeObjectURL(thumbnailUrl)];
			}

			_s(useVideoThumbnail, "/XYfGJKl5w6emPDp5TJtaHpzT8E=");

			/* harmony default export */
			__webpack_exports__["default"] = (useVideoThumbnail);

			const currentExports = __react_refresh_utils__.getModuleExports(module.i);
			__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

			if (true) {
				const isHotUpdate = !!module.hot.data;
				const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

				if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
					module.hot.dispose(
						/**
						 * A callback to performs a full refresh if React has unrecoverable errors,
						 * and also caches the to-be-disposed module.
						 * @param {*} data A hot module data object from Webpack HMR.
						 * @returns {void}
						 */
						function hotDisposeCallback(data) {
							// We have to mutate the data object to get data registered and cached
							data.prevExports = currentExports;
						}
					);
					module.hot.accept(
						/**
						 * An error handler to allow self-recovering behaviours.
						 * @param {Error} error An error occurred during evaluation of a module.
						 * @returns {void}
						 */
						function hotErrorHandler(error) {
							if (
								typeof __react_refresh_error_overlay__ !== 'undefined' &&
								__react_refresh_error_overlay__
							) {
								__react_refresh_error_overlay__.handleRuntimeError(error);
							}

							if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
								if (window.onHotAcceptError) {
									window.onHotAcceptError(error.message);
								}
							}

							__webpack_require__.c[module.i].hot.accept(hotErrorHandler);
						}
					);

					if (isHotUpdate) {
						if (
							__react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
							__react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
						) {
							module.hot.invalidate();
						} else {
							__react_refresh_utils__.enqueueUpdate(
								/**
								 * A function to dismiss the error overlay after performing React refresh.
								 * @returns {void}
								 */
								function updateCallback() {
									if (
										typeof __react_refresh_error_overlay__ !== 'undefined' &&
										__react_refresh_error_overlay__
									) {
										__react_refresh_error_overlay__.clearRuntimeErrors();
									}
								}
							);
						}
					}
				} else {
					if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
						module.hot.invalidate();
					}
				}
			}
			/* WEBPACK VAR INJECTION */
		}.call(this,
			__webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),
			__webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")
			))

		/***/
	}),

	/***/ 1:
	/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports, __webpack_require__) {

		// __webpack_require__(/*! D:\github_learning\virtual-background\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
		// __webpack_require__(/*! D:\github_learning\virtual-background\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
		module.exports = __webpack_require__(/*! D:\github_learning\virtual-background\src\index.tsx */"./src/index.tsx");


		/***/
	}),

}, [[1, "runtime-main", 0]]]);
