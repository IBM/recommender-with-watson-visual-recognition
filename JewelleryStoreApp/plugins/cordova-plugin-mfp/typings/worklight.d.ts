

/**
 * ================================================================= 
 * Source file taken from :: analytics.d.ts
 * ================================================================= 
 */

	declare module WL.Analytics {

		/**
		 * Turns on the capture of analytics data.
		 *
		 * The Promise returned by enable must be resolved prior to any WL.Analytics API call.
		 *
		 * It is not necessary to wait for the returned Promise to be resolved to continue using the
		 * WL.Analytics API.
		 *
		 * @example
		 * WL.Analytics.enable()
		 *
		 * .then(function () {
    	 *   //Capture of analytics data is fully enabled.
    	 * })
		 *
		 * .fail(function (errObj) {
    	 *   //errObj.src = function that failed
    	 *   //errObj.res = error message
    	 * });
		 *
		 *
		 * @returns {Promise} Resolved with no parameters, rejected with an error object.
		 * @methodOf WL.Analytics#
		 */
		function enable():WLPromise;

		/**
		 * Turns off the capture of analytics data.
		 *
		 * @example
		 * WL.Analytics.disable()
		 *
		 * .then(function () {
    	 *   //Capture of analytics data is fully disabled.
    	 * })
		 *
		 * .fail(function (errObj) {
    	 *   //errObj.src = function that failed
    	 *   //errObj.res = error message
    	 * });
		 *
		 * @returns {Promise} Resolved with no parameters, rejected with an error object.
		 * @methodOf WL.Analytics#
		 */
		function disable():WLPromise;

		/**
		 *
		 * Logs a message with additional contextual information.
		 *
		 * Log messages are automatically added to a persistent queue.  The accumulated data is sent
		 * to IBM® MobileFirst® server on the next explicit WL.Analytics.send function call.
		 *
		 * @example
		 * WL.Analytics.log('my record');
		 * // or
		 * WL.Analytics.log({data: [1,2,3]});
		 * // or
		 * WL.Analytics.log({data: [1,2,3]}, 'MyData');
		 *
		 * @param {string|Object} message The message to log.
		 * @param {string} name The name of the message to log.
		 *
		 * @returns {Promise} Resolved with no parameters, rejected with an error object.
		 * @methodOf WL.Analytics#
		 * @name WL.Analytics#log
		 */
		function log(message:string|Object, name?:string):WLPromise;

		/**
		 * Get the current state of WL.Analytics.
		 *
		 * The state object is kept by WL.Analytics and contains the following key:
		 * 
		 *   enabled (boolean) - Value is true if capture is enabled, false otherwise.
		 *
		 * Changing the state object that is returned does not affect the state object that is kept internally.
		 *
		 * WL.Analytics.state()
		 *
		 * .then(function (state) {
		 *   // {enabled: true}
		 * })
		 *
		 * .fail(function (errObj) {
		 *   //errObj.src = function that failed
		 *   //errObj.res = error message
		 * });
		 *
		 * @returns {Promise} Resolved with state object parameters, rejected with an error object.
		 * @methodOf WL.Analytics#
		 */
		function state():WLPromise;

		/**
		 *
		 * Send any analytics data collected up to this point to the IBM MobileFirst server.
		 *
		 * @returns {Promise} Resolved with success status, rejected with an error message.
		 *
		 * @methodOf WL.Analytics#
		 * @name WL.Analytics#send
		 */
		function send():WLPromise;

		/**
		 *
		 * Trigger In APP Feedback Mode to send feedback to bluemix server
		 *
		 * @returns {Promise} Resolved with success status, rejected with an error message.
		 *
		 * @methodOf WL.Analytics#
		 * @name WL.Analytics#triggerFeedbackMode
		 */
		function triggerFeedbackMode():WLPromise;

		/**
		 *
		 * Specify current application user.  If you want user-based analytics, you must use this method
		 * call.  For example, use it when the user logs in, and call the unsetUserContext method when the
		 * user logs out.  Or if your application supports user profiles, call this method when the user
		 * profile changes.
		 *
		 * @param {string} user User id for current app user.
		 *
		 * @returns {Promise} Resolved with success status, rejected with an error message.
		 * @methodOf WL.Analytics#
		 * @name WL.Analytics#setUserContext
		 */
		function setUserContext(user:String):WLPromise;

		/**
		 *
		 * Unset any user context previously set.
		 *
		 * @returns {Promise} Resolved with success status, rejected with an error message.
		 *
		 * @methodOf WL.Analytics#
		 * @name WL.Analytics#unsetUserContext
		 */
		function unsetUserContext():WLPromise;
}

/**
 * ================================================================= 
 * Source file taken from :: securityutils.d.ts
 * ================================================================= 
 */

declare module WL.SecurityUtils {

		/**
       * Generates a key by using the PBKDF2 algorithm.
       * 
       * @param {Object} options Required.
       * @param {string} options.password Required. Password that is used to generate the key.
       * @param {string} options.salt Required. Salt that is used to to generate the key.
       * @param {number} options.iterations Required. Number of iterations that is used for the key generation algorithm.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is the hex encoded key.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function keygen(options: Object): WLPromise;

		/**
       * Encrypts text with a key.
       * 
       * @param {Object} options Required.
       * @param {string} options.key Required. Text to encrypt.
       * @param {string} options.text Required. Key that is used for encryption.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is an object which includes the cipher text.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function encrypt(options: Object): WLPromise;

		/**
       * Decryption function.
       * 
       * @param {Object} options Required.
       * @param {string} options.key Required. Key.
       * @param {string} options.ct Required. Cipher Text.
       * @param {string} options.iv Required. Initialization Vector.
       * @param {string} options.src Required. Source ('obj' = iOS, 'java' = Android, 'js' = Web).
       * @param {number} options.v Required. Version.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is the decrypted text.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function decrypt(options: Object): WLPromise;

		/**
       * Generates a random hex string locally.
       * 
       * @param {number} [bytes] Optional. Number of bytes that is used to generate the string. Default is 32 bytes.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is the random hex string.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function localRandomString(bytes?: number): WLPromise;

		/**
       * Encodes input as base64 string.
       * 
       * @param {string} input Required. Input string.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is the input string encoded.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function base64Encode(input: string): WLPromise;

		/**
       * Decodes input base64 string to a non base64 encoded string.
       * 
       * @param {string} input Required. Input base64 encoded string.
       *
       * @return {Promise} Resolved when the operation succeeds, first parameter is the input string decoded.
       *   Rejected when there is a failure.
       *   
       * @methodOf WL.SecurityUtils#
       */
    function base64Decode(input: string): WLPromise;

		/**
      	 * ONLY FOR IOS
         * Choose wether internal/native or openssl basaed encryption will be applied.
         *
         * @param {boolean} enable Required. true native false openssl.
         *
         * @return {Promise} Resolved when the operation succeeds.
         *   Rejected when there is a failure.
         *
         * @methodOf WL.SecurityUtils#
         */
    function enableOSNativeEncryption(enable: boolean): WLPromise;
}


/**
 * ================================================================= 
 * Source file taken from :: wlapp.d.ts
 * ================================================================= 
 */


declare module WL.App {

		/**
         * @deprecated Since version 8.0
    	 * @description Shows the default IBM MobileFirst splash screen on the activity that was passed as a parameter
    	 * @methodOf WL.App#
    	 * @name WL.App#showSplashScreen
    	 */
    function showSplashScreen(): void;

		/**
         * @deprecated Since version 8.0
    	 * @description Hides the default IBM MobileFirst splash screen if it is shown, 
    	 * and does nothing if the default MobileFirst splash screen is already hidden
    	 * @methodOf WL.App#
    	 * @name WL.App#hideSplashScreen
    	 */
    function hideSplashScreen(): void;


		/**
    	 * This method is applicable to iOS, Android and WP8.
    	 * @description
    	 * Sets the MobileFirst server URL to the specified URL.
    	 *
    	 * Changes the MobileFirst server URL to the new URL, cleans the HTTP client context, and calls successCallback when finished.
    	 * After calling this method, the application is not logged in to any server.
    	 * If the specified URL is malformed, then failCallback is called and the MobileFirst server URL remains unchanged.
    	 *
    	 * Notes:
    	 * The responsibility for checking the validity of the URL is on the developer.
    	 * When using this function you might want to perform additional clean-up, for example partial or full wipe of JSONStore or HTML5 LocalStorage. 
    	 * For more information on clean-up, see {@link WL.JSONStore}.
    	 * 
    	 * @example
    	 * WL.App.setServerUrl("http://9.148.23.88:10080/context", successCallback, failCallback);
    	 * 
    	 * @param {string} url Mandatory. The URL of the new server, including protocol, IP, port, and context.
    	 * @param successCallback Optional. The callback function that is called after the MobileFirst URL is set to the specified URL.
    	 * @param failCallback Optional. The callback function that is called if this method fails or is not supported.
    	 * @methodOf WL.App#
    	 */
    function setServerUrl(url: string, successCallback?: Function, failCallback?: Function ): void;

		/**
    	 * @description
    	 * Gets MobileFirst server URL.
    	 * This method is asynchronous, so the MobileFirst server URL is returned as an argument to the successCallback function.
    	 * 
    	 * @param successCallback Mandatory. The callback function that is called with the MobileFirst server URL as an argument.
    	 * @param failCallback Optional. The callback function that is called if this method fails.
    	 * @methodOf WL.App#
    	 */
    function getServerUrl(successCallback: Function , failCallback?: Function): void;

		/**
    	 * Extracts a string that contains an error message.
    	 * @description 
    	 * 
    	 * Extracts a string that contains the error message within the specified exception object. 
    	 * Use for exceptions that are thrown by the IBM MobileFirst client runtime framework.
    	 * @param {exception} exception Mandatory. The exception object from which the error string is extracted.
    	 * @methodOf WL.App#
    	 * @name WL.App#getErrorMessage
    	 */
    function getErrorMessage(exception: any): string;

}

declare module WL.NativePage {

		/**
		 * @deprecated Since version 8.0
     	 * Switches the currently displayed, web-based screen with a natively written page
    	 * @param className Mandatory. String. The name of the native class. For iOS, the name of the class (for example, BarCodeController). 
    	 * 		For Android, the complete name of the class and package (for example, com.neebula.barcode.Scanner). 
    	 * @param callback Mandatory. Function. A function object that is called when the native page switches back to the web view. 
    	 * 		This function is passed a single JSON object parameter when invoked.
    	 * @param data Optional. Object. A JSON object that is sent to the native class. For iOS, The data must be single string or a flat record of strings.
    	 *
    	 * @example
    	 * // Good
    	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1'});
    	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1', key2 : 'value2'});
    	 *
    	 * // Bad
    	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1', innerStruct : {innerKey1 : 'innervalue1'}});
     	 *
     	 * @methodOf WL.NativePage#
    	 * @name WL.NativePage#show
    	 */
    function show(className: string, callback: Function, data?: Object): void;
}


/**
 * ================================================================= 
 * Source file taken from :: wlauthorizationmanager.d.ts
 * ================================================================= 
 */

declare module WLAuthorizationManager {

		/**
		 * @description Obtains an access token for the specified resource scope from the MobileFirst authorization server.
		 * @param {String} scope Optional. Scope for which to obtain the access token. 
		 * @returns A promise object that can be used to receive the access token asynchronously.
		 *   The access token is sent as an object with the following properties:
		 *   	scope - the scope which the access token was obtained for.
		 *		value - the access token value.
		 *		asAuthorizationRequestHeaderField - the access token value required for an authorization header.
		 *		asFormEncodedBodyParameter - the access token value required for the HTTP-request entity body.
	     * @example    
		 * WLAuthorizationManager.obtainAccessToken(scope)
		 * .then (
		 *   function(accessToken) {
		 * 	   // success flow with the access token
		 *   },
		 *   function(error) {
		 *     // failure flow
		 *   }
		 * };
		 * 
	     * @methodOf WLAuthorizationManager#
		 */
    function obtainAccessToken(scope?: string): WLPromise;
    
		/**
	     * @description Logs into the specified security check.
	     * @param {String} securityCheck Mandatory. Name of the security check to log into.
	     * @param {Object} credentials Mandatory. Credentials for logging into the specified security check.
	     * @returns A promise object that can be used to login asynchronously.
	     * @methodOf WLAuthorizationManager#
	    */
	function login(securityCheck: string, credentials: Object): WLPromise;
	
	    /**
	     * @description Logs out of the specified security check.
	     * @param {String} securityCheck Mandatory. Name of the security check to log out of.
	     * @returns A promise object that can be used to logout asynchronously.
	     * @methodOf WLAuthorizationManager#
	     */
	function logout(securityCheck: string): WLPromise;
	    
		/**
		 * @description Checks whether the provided response status and headers represent a protected resource that requires authorization.
		 * @param {Integer} responseStatus Mandatory. Specifies the response status code.
		 * @param {String} responseHeaders Mandatory. A String representation of the response headers separated by CRLF, as returned from XMLHttpRequest.getAllResponseHeaders().
		 * @returns A boolean value, indicating whether authorization is required (<code>true</code>), or not (<code>false</code>).
		 * @methodOf WLAuthorizationManager#
		 */
    function isAuthorizationRequired(responseStatus: number, responseHeaders: Object): boolean;
    
		/**
		 * @description Checks whether the provided response status and headers represent a protected resource that requires authorization.
		 * @param {Integer} responseStatus Mandatory. Specifies the response status code.
		 * @param {String} responseHeaders Mandatory. A String representation of the response headers separated by CRLF, as returned from XMLHttpRequest.getAllResponseHeaders().
		 * @returns A boolean value, indicating whether authorization is required (<code>true</code>), or not (<code>false</code>).
		 * @methodOf WLAuthorizationManager#
		 */
	function clearAccessToken(accessToken: Object): WLPromise;

		/**
		 * @description Returns the scope of the protected resource for the provided response headers.<br/>
		 * Note: Call this method only for response headers for which {@link #isAuthorizationRequired(int, Map)}
	   	 * returns {@code true}, indicating that the resource is protected.
		 * @param {String} responseHeaders Mandatory. A String representation of the response headers separated by CRLF, as returned from XMLHttpRequest.getAllResponseHeaders().
		 * @returns The protecting scope of the target resource, as returned in the {@code WWW-Authenticate} HTTP response header.
		 * @methodOf WLAuthorizationManager#
		 */
    function getResourceScope(responseHeaders: string): string;
    
		 /**
	     * @description Sets the URL of the authorization server.
	     * When this method is not called, the MobileFirst Server URL is used.
	     * @param {String} url Mandatory. URL of the authorization server to set.
	     * @returns A promise object.
	     * @methodOf WLAuthorizationManager#
	     */
    function setAuthorizationServerUrl(url: string): WLPromise;
	
	    /**
	     * @description Retrieves the URL of the authorization server.
	     * @returns Returns the URL of the current authorization server, as a String.
	     * @returns A promise object.
	     * @methodOf WLAuthorizationManager#
	     */
    function getAuthorizationServerUrl(): WLPromise;

}


/**
 * ================================================================= 
 * Source file taken from :: wlclient.d.ts
 * ================================================================= 
 */


declare module WL.Client {

		/**
		* @deprecated Since version 8.0
        * Adds an HTTP header to be used in server requests issued by an IBM MobileFirst framework.
        * @description
        * The HTTP header is used in all requests until removed by the WL.Client.removeGlobalHeader API call.
        * @example
        * WL.Client.addGlobalHeader("MyCustomHeader","abcdefgh");
        * @param headerName Mandatory. The name of the header to be added.
        * @param headerValue Mandatory. The value of the header to be added.
        * @methodOf WL.Client#
        */
    function addGlobalHeader(headerName: string, headerValue: string): void;

		/**
		* @deprecated Since version 8.0
        * Identifies the type of environment in which the application is running. Such as iPhone, Android, or Windows.
        * @description
        * @returns A constant that identifies the type of environment. The valid values are defined in the WL.Environment variable in the worklight.js file, and are as follows:
        *
        * WL.Environment.ANDROID
        * WL.Environment.IPAD
        * WL.Environment.IPHONE
        * WL.Environment.MOBILE_WEB
        * WL.Environment.PREVIEW (when the application runs in Preview mode)
        * WL.Environment.WINDOWS_PHONE_8
        * WL.Environment.WINDOWS8
        * WL.Environment.DESKTOPBROWSER
        *
        * When an app is running in Preview mode, this method returns WL.Environment.PREVIEW, regardless of the previewed environment.
        * There are two reasons for this behavior:
        *
        * Environment - specific code can fail when invoked from the browser (because the environment might support features that are not available in the browser).
        *WL.Client behaves differently in different environments (for example, cookie management).
        *
        *A good practice is to rely on the IBM MobileFirst UI optimization framework and separate environment-dependent JS to separate files rather than using the WL.Client.getEnvironment() function.
        * @methodOf WL.Client#
        */
    function getEnvironment(): string;


		/**
        * Initializes the WL.Client object. The options of this method reside in the initOptions.js file.
        * @description
        * @param options An optional options object augmented with the following additional optional properties:
        *
        * 		Timeout:
        * 		An integer value, denoting the timeout in milliseconds.
        * 			The timeout affects all calls from the app to the MobileFirst Server. If not specified, a timeout of 30,000 milliseconds (30 seconds) is used.
        *
        * 		messages:
        * 			A dictionary object for localizing texts, located in the messages.js file. If not specified, the default object Messages (in the same file) is used.
        *
        *
        * 		heartBeatIntervalInSecs:
        * 			An integer value, denoting the interval in seconds between heartbeat messages automatically sent by WLClient to the MobileFirst Server. The default value is 420 (7 minutes).
        *
        * 		connectOnStartup:
        * 			Deprecated: The connectOnStartup init option is deprecated. MobileFirst applications by default are configured to not connect to the MobileFirst Server. If you would like your application to connect to the MobileFirst Server, use WL.Client.connect().
        *
        * 		onConnectionFailure:
        * 			A failure-handling function invoked when connection to the MobileFirst Server, performed on initialization by default, or if the connectOnStartup flag is true, fails.
        *
        * 		onUnsupportedVersion
        * 			A failure-handling function invoked when the current version of the application is no longer supported (a newer application has been deployed to the server). For more information about the signature of failure-handling functions, see The Options Object.
        *
        * 		onRequestTimeout
        * 			A failure-handling function invoked when the init() request times out. For more information about the signature of failure-handling functions, see The Options Object.
        *
        *
        * 		onUserInstanceAccessViolation:
        * 			A failure-handling function invoked when the user is trying to access an application that was provisioned to a different user.
        * 			For more information about the signature of failure-handling functions, see The Options Object.
        *
        * 		onErrorRemoteDisableDenial:
        * 			A failure-handling function invoked when the server denies access to the application, according to rules defined in the IBM MobileFirst Console.
        * 			If this function is not provided, the application opens a dialog box, which displays an error message defined in the IBM MobileFirst Console.
        * 			When used, the function can provide an application-specific dialog box, or can be used to implement additional behavior in situations where the server denies access to the application.
        * 			It is important to ensure that the application remains offline (not connected).
        *
        * 		Parameters:
        * 		message: This parameter contains the notification text that you defined in the MobileFirst Console, which indicates that an application is denied access to the MobileFirst Server.
        * 		downloadLink: This parameter contains the URL that you defined in the MobileFirst Console to download the new version of the application, that users can find in the appropriate application store.
        *
        * 		Example
        * var wlInitOptions = {
        * 	connectOnStartup : true,
        * 	onErrorRemoteDisableDenial : function (message, downloadLink) {
        * 	WL.SimpleDialog.show(
        * 		"Application Disabled",
        * 		message,
        * 		[{text: "Close application", handler: function() {WL.App.close();}},
        * 		{text: "Download new version", handler: function() {WL.App.openURL(downloadLink, "_blank");}}]
        * 		);
        * 	}
        * };
        *
        * 		onErrorAppVersionAccessDenial:
        * 		A failure-handling function invoked when the server denies access to the application, according to rules defined in the IBM MobileFirst Console.
        * 			If this function is used, the developer takes full ownership of the implementation and handling if Remote Disable took place.
        * 			If the failure-handling function is not provided, the application opens a dialog box, which displays an error message defined in the IBM MobileFirst Console.
        * 			Note: onErrorAppVersionAccessDenial is deprecated since V5.0.6. Instead, use onErrorRemoteDisableDenial.
        *
        * 		validateArguments:
        * 		A Boolean value, indicating whether the IBM MobileFirst Client runtime library validates the number and type of method parameters. The default is true.
        *
        * 		autoHideSplash:
        * 		A Boolean value, indicating whether the IBM MobileFirst splash-screen will be auto-hidden. To disable automatic hiding of the splash screen set this property to false. Default is true.
        *
        *
        * @note {Note} The onSuccess function is used to initialize the application.
        * 	If an onFailure function is not passed, a default onFailure function is called. If onFailure is passed, it overrides any specific failure-handling function.
        * @methodOf WL.Client#
        * @name WL.Client#init
        */
    function init(initOptions?: Object): void;

    	/**
        * @deprecated Since version 8.0. Use WLResourceRequest instead
        *
        * Invokes a procedure that is exposed by an IBM MobileFirst adapter. Prior to invoking a procedure, a connect request to the MobileFirst Server is first initiated.
        * @description
        * @param invocationData Mandatory. A JSON block of parameters. For a description of the structure of the parameter block.
        * The WL.Client invokeProcedure function accepts the following JSON block of parameters:
        * {
        * 	adapter : 'adapter-name',
        *	procedure : 'procedure-name',
        *	parameters : []
        * }
        *
        * 		adapter:
        * 		Mandatory. A string that contains the name of the adapter as specified when the adapter was defined.
        *
        * 		procedure:
        * 		Mandatory. A string that contains the name of the procedure as specified when the adapter was defined.
        *
        * 		parameters:
        * 		Optional. An array of parameters that is passed to the back-end procedure.
        *
        * @param options Optional. A standard options object, augmented with the following property:
        *
        *   The success handler response object can contain the following properties:
		*
        * 		    invocationContext:
        * 		    The invocationContext object that was originally passed to the MobileFirst Server in the callback object.
        *
        *		      invocationResult:
        *
        *           An object that contains the data that is returned by the invoked procedure, and the invocation status. Its format is as follows:
        * invocationResult = {
        * 	isSuccessful: Boolean,
        * 	errors : "Error Message"
        * 	// Procedure results go here
        * }
        *
        * 		      Where:
        * 			        isSuccessful – Contains true if the procedure invocation succeeded, false otherwise.
        * 			         If the invocation failed, the failure handler for the request is called.
        * 			        errors – An optional array of strings containing error messages.
        *
        * 			  parameters:
        * 			  Optional. An array of parameters that is passed to the back-end procedure.
        *
        *   timeout: Integer. Number of milliseconds to wait for the server response before failing with a request timeout. The default timeout value is 30000 milliseconds (30 seconds).
        *
        *       The maximum timeout value in any Windows Phone environment is 60000 milliseconds (60 seconds).
        *
        *   The failure handler of this call is called in two cases:
        *
        *       The procedure was called but failed. In this case, the invocationResult property is added to the response received by the failure handler.
        *        This property has the same structure as the invocationResult property returned to the success handler,
        *        but the value of the isSuccessful attribute is false. For the structure of the invocationResult property, see invocationResult.
        *       A technical failure resulted in the procedure not being called. In this case, the failure handler receives a standard response object.
        *
        * @return {Promise} Resolved when the operation is successful. Rejected when there is a failure.
        *
        * @methodOf WL.Client#
        */
    function invokeProcedure(invocationData: Object, options?: Object): WLPromise;


        /**
        * @deprecated Since version 8.0. Use WLAuthorizationManager.obtainAccessToken() to check connectivity to the server and apply application management rules.
        *
        * This method sends an initialization request to the MobileFirst Platform Server, establishes a connection with the server, validates the application version and provides and Access Token.
        * @description
        * @param options Optional. A standard options object.
        *
        * @methodOf WL.Client#
        */
       function connect(options?: Object);



    	/**
    	* Pins the host X509 certificate public key to the client application.
    	* Secured calls to the pinned remote host will be checked for a public key match.
    	* Secured calls to other hosts containing other certificates will be rejected.
    	* Some mobile operating systems might cache the certificate validation check results.
    	* Your app must call the certificate pinning method before making a secured request.
    	* Calling this method a second time overrides any previous pinning operation.
		* @param certificateFilename/certificateFilenames -  the name of the certificate file/array of names of certificate files that is located under
		* the certificate folder located in the application root
		* @return {Promise} Resolved when the operation is successful and the certificate is pinned. Rejected if any of the certificateFilename is undefined, not found or is not in DER format.
		* @methodOf WL.Client#
		*/
    function pinTrustedCertificatePublicKey(certificateFilename: string): WLPromise;

		/**
        * Reloads the application
        * @description It can be used to recover an application from errors. It is preferable to avoid using it and to use alternative error handling mechanisms instead.
        *  		The method is mainly available for compatibility with earlier versions.
        * @methodOf WL.Client#
        */
    function reloadApp(): void;

		/**
		* @deprecated Since version 8.0
        * Removes the global HTTP header added by the WL.Client.addGlobalHeader API call
        * @description
        * @param headerName Mandatory. The name of the header to be removed.
        * @example
        * WL.Client.removeGlobalHeader("MyCustomHeader");
        * @methodOf WL.Client#
        */
    function removeGlobalHeader(headerName: string): void;

		/**
        * Sets the interval of the heartbeat signal.
        * @description Sets the interval of the heartbeat signal sent to the MobileFirst Server to the specified number of seconds.
        * 		The heartbeat is used to ensure that the session with the server is kept alive when the app does not issue any call to the server (such as invokeProcedure).
        * @param interval Mandatory. An integer value, denoting the interval in seconds between heartbeat messages automatically sent by WLClient to the MobileFirst Server.
        * 			An interval value of -1 disables the heartbeat:
        * 			WL.Client.setHeartBeatInterval(-1)
        * @methodOf WL.Client#
        */
    function setHeartBeatInterval(interval: number): void;

		/**
    	 * Retrieves cookies from the native HTTP client.
    	 * @description This function is asynchronous and returns a promise.
    	 *
    	 * The array of cookies will be passed as a parameter to resolve callback.
    	 * @example
    	 * WL.Client.getCookies().then(function(cookies){...})
    	 * @note {Note} HttpOnly and Secure cookies are not returned.
    	 * @returns Promise
    	 * @methodOf WL.Client#
    	 */
    function getCookies(): WLPromise;

		/**
    	 * Adds a cookie to the native HTTP client.
    	 * @description This function is asynchronous and returns a promise.
    	 * @example
    	 * WL.Client.setCookie(myCookie).then(successFlow);
    	 * @param cookie Mandatory. JSON object with required cookie properties: name, value, domain, path, expires
    	 * @returns Promise
    	 * @methodOf WL.Client#
    	 */
    function setCookie(cookie: Object): WLPromise;

		/**
    	 * Deletes a cookie from the native HTTP client cookie storage.
    	 * @description This function is asynchronous and returns a promise.
    	 * @example
    	 * WL.Client.deleteCookie(myCookie).then(successFlow);
    	 * @param name Mandatory. Cookie name.
    	 * @returns Promise
    	 * @methodOf WL.Client#
    	 */
    function deleteCookie(name: string): WLPromise;

    /**

    /**
      * Clear all the cookies from persistence and from the cache.
      * @description This function is asynchronous and returns a promise.
      * @example
      * WL.Client.clearCookie().then(successFlow);
      * @returns Promise
      * @methodOf WL.Client#
      */
    function clearCookie(): WLPromise;

    /**
	    * Clear all the session cookies while maintaining the persisted ones.
	    * This function is asynchronous and returns deferred object.
	    * Example: WL.Client.clearCookieSession().then(successFlow);
	    * @returns promise object
	    * @methodOf WL.Client#
      */
    function clearCookieSession(): WLPromise;

    /**
        * Returns the previously saved value associated with key.
        * @description Retrieves a previously saved value associated with key from application participating in simple shared data who are in the same application family,
        * defined by the same family name and same application signing key.
        * @note {Note}  This API call is only applicable in Android and IOS environments. It is a safe, but no-op, call in other environments.
        * @param Object Mandatory. Object containing the key to retrieve, like {key: 'myKey'}
        * @returns Promise containing the retrieved value, or null if no value is found
        * @methodOf WL.Client#
        */
    function getSharedToken(Key: Object): WLPromise;

        /**
        * Saves a key/value pair such that it is available to other applications.
        * @description Saves a key/value pair such that it is available to other applications participating in simple shared data who are in the same application family,
        * defined by the same family name and same application signing key.
        * @note {Note}  This API call is only applicable in Android and IOS environments. It is a safe, but no-op, call in other environments.
        * @param Object Mandatory. Object containing the key/value pair to share, like {key: 'myKey', value: 'myValue'}
        * @returns Promise
        * @methodOf WL.Client#
        */
    function setSharedToken(keyvaluepair: Object): WLPromise;

        /**
        * Clears a previously saved value associated with key.
        * @description Clears a previously saved value associated with key from applications participating in simple shared data who are in the same application family,
        * defined by the same family name and same application signing key.
        * @note {Note}  This API call is only applicable in Android and IOS environments. It is a safe, but no-op, call in other environments.
        * @param Object Mandatory. Object containing the key to clear, like {key: 'myKey'}
        * @returns Promise
        * @methodOf WL.Client#
        */
    function clearSharedToken(Key: Object): WLPromise;

        /**
		* @deprecated Since version 8.0
        * Return the language code of the language being used.
        * @description  This method returns the language or dialect code of the language currently being used for the application.
        * @note {Note}  This method is not relevant for mobile operating systems. Use mobile locale methods instead.
        * @returns The language or dialect code of the currently set language, or NULL if no language is set. The language or dialect code has the format ll or ll-cc,
        * 		where ll is a two-letter ISO 639-1 language code and cc is a two-letter ISO 3166-1-alpha-2 country or region code.
        *
        * @methodOf WL.Client#
        */
    function getLanguage(): string;

		/**
	    * Creates a challenge handler responsible for handling responses from a third party gateway.
	    * An arbitrary name must be supplied as a parameter.
	    *
	    * When you create a GatewayCheckChallengeHandler, you must implement the following methods:
	    *
	    * - canHandleResponse() - Called each time that a response is received from the server. It is used to detect whether the response contains data that is related to this challenge handler, and returns TRUE if so, and FALSE if not. If this method returns TRUE, the framework will call handleChallenge.
	    * - handleChallenge() - The MobileFirst framework calls this method only when canHandleResponse(). This function is used to perform required actions, such as hiding the application screen, displaying the login screen, or other actions required to pass the challenge successfully.
	    *
	    * The following APIs are available on the generated GatewayCheckChallengeHandler:
	    *
	    * - cancel() - Notifies the MobileFirst framework that the authentication process needs to be canceled.
	    * The MobileFirst framework then disposes of the original request that triggered the authentication.
	    * - submitLoginForm(reqURL, options, submitLoginFormCallback) - Call this method to send collected credentials to a specific URL. The developer can also specify request parameters, headers, and callback.
	    * - submitSuccess - Call this method to notify the MobileFirst framework that the authentication successfully finished.
	    * The MobileFirst framework then automatically issues the original request that triggered the authentication.
	    *
	    * @param gatewayName An arbitrary name representing the challenge.
	    * @methodOf WL.Client#
	    */
    function createGatewayChallengeHandler(gatewayName: string): WL.Client.GatewayChallengeHandler;

		/**
	   * Creates a challenge handler object to handle challenges that are sent by the MobileFirst Server.
	   *
	   * A SecurityCheckChallengeHandler works only with a security check that is based on the MobileFirst authentication protocol,
	   * that is, server side security check instance extends one of the MobileFirst provided security checks,
	   * There must be only one challenge handler per security check. To comply with the MobileFirst authentication protocol,
	   * the challenge that the challenge handler receives must be a JSON object.
	   * <p>
	   * When you create a SecurityCheckChallengeHandler, you must implement the following methods:
	   *
	   * - handleChallenge() - The MobileFirst framework calls this method only for the relevant challenge. This function is used to perform required actions,
	   * such as hiding the application screen, displaying the login screen, or other actions required to pass the challenge successfully.
	   * - handleSuccess() - This method is called when the MobileFirst Server reports an authentication success.
	   * - handleFailure() - This method is called when the MobileFirst Server reports an authentication failure.
	   *
	   *
	   * The following APIs are available on the generated GatewayCheckChallengeHandler:
	   *
	   * - cancel() - Notifies the MobileFirst framework that the authentication process needs to be canceled.
	   * The MobileFirst framework then disposes of the original request that triggered the authentication.
	   * - submitChallengeAnswer(answer) - Call this method to send an answer back to the security check that triggered this challenge. The answer should be in a JSON format.
	   *
	   * @param securityCheckName security check name that represents the challenge,
	   * Used to identify which security check requires authentication.
	   *
	   * @methodOf WL.Client#
	   *
	   */
    function createSecurityCheckChallengeHandler(securityCheckName: string): WL.Client.SecurityCheckChallengeHandler;


    class AbstractChallengeHandler {

	    isWLHandler: boolean;
			activeRequest: Object;
			requestWaitingList: Object[];

		/**
        * This function is called whenever the response is considered relevant to this challenge. This function is used to perform required actions,
        * such as hiding the application screen, displaying the login screen, or other actions required to pass the challenge successfully.
        * @param challenge Challenge to handle
        * @methodOf WL.Client.AbstractChallengeHandler#
        * @name WL.Client.AbstractChallengeHandler#handleChallenge
        */
     handleChallenge(challenge: Object): void;

		/**
        * Notifies the MobileFirst framework that the authentication process needs to be canceled.
		    * The MobileFirst framework then disposes of the original request that triggered the authentication
        * @param err Error message if available
        * @methodOf WL.Client.AbstractChallengeHandler#
        * @name WL.Client.AbstractChallengeHandler#cancel
        */
     cancel(): void;

}

class SecurityCheckChallengeHandler extends AbstractChallengeHandler{
    MAX_NUMBER_OF_FAILURES: number;
		numOfFailures: number;

		/**
		* This method is called when the MobileFirst Server reports an authentication success.
		**/
		handleSuccess(identity?: any): void;

		/**
		* This method is called when the MobileFirst Server reports an authentication failure.
		**/
    handleFailure(err?: any): void;

		/**
		* Call this method to send an answer back to the security check that triggered this challenge. The answer should be in a JSON format.
		**/
		submitChallengeAnswer(answer: Object): void;

}

class GatewayChallengeHandler extends AbstractChallengeHandler{

    	/**
		 * User calls this function when the the challenge was handled successfully.
		 * When a success is submitted, the state of successes is checked for all challenges issued per original request.
		 * What this means is that, if all challenges are successfully met, the original message would be resent automatically.
		 */
        submitSuccess(): void;

		/**
		 * Must be implemented by developer.
		 *
		 * This method will be invoked by the IBM MobileFirst Platform for every server response.
		 * It is responsible to detect whether server response contains data
		 * that should be processed by this challenge handler.
         * @param transport Response that arrived from the server
         * @return true if the response is a challenge that this handler handles
		 */
        canHandleResponse(transport: any): boolean;

		/**
        * Used to send collected credentials to a specific URL. The developer can also specify request parameters, headers, and callback.
        * @param reqURL URL to send data to
        * @param options Other options like timeout, extra headers
        * @param submitLoginFormCallback Callback method when operation is done
        */
     submitLoginForm(reqURL: string, options: Object, submitLoginFormCallback: Function): void;


}

  	/**
	 * Gets the display name of the device. The display name is retrieved from the MobileFirst Server registration data.
	 *
	 * @param {Object} options An object that contains <code>onSucess</code> and <code>onFailure</code> completion callback functions.<br />
	 *        The <code>onSuccess</code> function receives a JSON object parameter that contains the server's response, which includes the
	 *        display name of the the device or null if no display name was set. For example:
	 *        <ul>
	 *            <li>{ responseJSON: { deviceDisplayName: "John's Device" } }</li>
	 *            <li>{ responseJSON: { deviceDisplayName: null } }</li>
	 *        </ul>
	 *
	 * @methodOf WL.Client#
	 */
	function getDeviceDisplayName(options: Object): void;

	/**
	 * Sets the display name of the device. The display name is stored in the MobileFirst Server registration data.
	 *
	 * @param {String} deviceDisplayName The device display name to set.
	 * @param {Object} options An object that contains <code>onSucess</code> and <code>onFailure</code> completion callback functions.
	 *
	 * @methodOf WL.Client#
	 */
	function setDeviceDisplayName(deviceDisplayName: string, options: Object): void;
}


/**
 * ================================================================= 
 * Source file taken from :: wlgap.d.ts
 * ================================================================= 
 */



declare module WL.App {

    /**
    * supported only on Android environment
    * returns the screen height
    * @returns {number} screen height
    */
    function getScreenHeight(): number;

    /**
    * supported only on Android environment
    * returns the screen width
    * @returns {number} screen width
    */
    function getScreenWidth(): number;

    /**
    * supported only on Android environment
    * retrieving screen size
    * @param {Function} callback Mandatory function. The callback function that is invoked when the size is received.
    */
    function getScreenSize(callback: Function): void;

    /**
    * supported only on Android, Windows Phone and iOS environments
    * reset server context
    */
    function resetServerContext(): void;

    /**
    * supported only on Android, Windows Phone and iOS environments
    * returns user preference value for the given key
    * @param {string} key
    * @param {Object} options
    * @param {Function} options.onSuccess
    * @param {Function} options.onFailure
    */
    function readUserPref(key: string, options: Object): void;

    /**
    * supported only on Android, Windows Phone and iOS environments
    * writes user preference with the give key,value pair
    * @param {string} key
    * @param {Object} value
    */
    function writeUserPref(key: string, value: Object): void;

    /**
    * supported only on Android, Windows Phone and iOS environments
    * get init parameters
    * @param {string} parameters
    * @param {Function} successCallback Mandatory function.
    * @param {Function} failCallback Mandatory function.
    */
    function getInitParameters(parameters: string, successCallback: Function, failCallback: Function): void;

    /**
     * supported only on Android, Windows Phone and iOS environments
     * Send an action to the native code. The action will be processed immediately, if the target receiver has been registered. 
     * Otherwise, the action will be stored in the cache and processed as soon as the target receiver becomes available (registered).
     * @param {string} action - a string that identifies target receivers; all receivers registered with the specified action will receive the message.
     * @param {Object} data - an optional data object to be passed to target receivers along with action; 
     * @param {string} tag  
     */
    function sendActionToNative(action: string, data?: Object, tag?: string): void;

    /**
     * supported only on Android, Windows Phone and iOS environments
     * Registers an action receiver. In JavaScript a receiver should be implemented as a callback that can receive an object.
     * @param {string} id - a string that identifies the receiver. This string will be specified in the native code when sending notifications to JavaScript.
     * @param {Function} callback - implementation of receiver. This callback will be called when an action identified by "id" is sent from the native code.
     * @param {string} tag
     */
    function addActionReceiver(id: string, callback: Function, tag?: string): void;
    
    /**
    * supported only on Android, Windows Phone and iOS environments
 	* Removes (unregisters) an action receiver. All further messages addressed to this receiver will be placed to the cache. The pending
 	* messages will be delivered as soon as the receiver is registered again with the same id.
 	* @param id - a string that identifies the receiver to be unregistered.
 	*/
	function removeActionReceiver(id: string): void;
	
}

declare module WL.Badge {

		/**
     	 * Sets the application badge to the number provided.
    	 * @description Sets the application badge to the number provided.
    	 * @note {Note} This object is only applicable to iOS and Windows Phone 8 applications.
    	 * 
    	 * 
    	 * @param number Mandatory. Integer. An integer that is displayed as a badge over the application icon. 
    	 * 		For iOS, a value lesser than or equal to 0 removes the application badge. Values that are too long (5 digits, or more) to be entirely  displayed in an iPhone device are truncated with ellipsis.
    	 *      For Windows Phone 8, a value lesser than or equal to 0 removes the application badge. A number greater than 99 sets the tile count to 99.
    	 * 
     	 * @methodOf WL.Badge#
    	 */
    function setNumber(num: number): void;
}

/**
 * ================================================================= 
 * Source file taken from :: wllogger.d.ts
 * ================================================================= 
 */


declare module WL.Logger {

		/**
    	 *
    	 * Configures the logger globally.  This means every logger instance created using WL.Logger.create, all uses of the global
    	 * WL.Logger functions and any native API calls to the MobileFirst logger API are affected.
    	 *
    	 * @example
    	 * WL.Logger.config()
    	 *
    	 * Merge the passed object parameter with the current configuration, which can be retrieved using WL.Logger.status()
    	 *
    	 * @param {object} [options] Defines the logger's behavior.
    	 * @param {boolean} [options.stringify] Turns arguments to strings and concatenates them (true) or leaves arguments as an array (false). Default is true.
    	 * @param {boolean} [options.pretty] Turn JSON into a human readable format. Default is false. 
    	 * @param {boolean} [options.stacktrace] Enable/disable printing the stacktrace from an error message. Default is false.
    	 * @param {function} [options.callback] Called after a log message is sent to the console with the following parameters:
    	 * 		
    	 * 			message: (string or array) The log message. String if stringify is true, array otherwise.
    	 * 			level: (string) Log level.
    	 * 			package: (string) Package that is associated with the log or empty string.
    	 * 		
    	 * @param {string} [options.pkg] Associates log messages with a package. By default does not associate (includes an empty string).
    	 * @param {object} [options.tag] Contains keys: level and tag. 
    	 * @param {boolean} [options.tag.level] Appends log level tag to the string log message (true) or does nothing (false). Default is false.
    	 * @param {boolean} [options.tag.pkg] Appends package name string message (true) or does nothing (false). Default is false.
    	 * @param {object} [options.filters] Object with key/value pairs like {'package': 'LEVEL'} for packages to log.  This is treated as a whitelist; only log
    	 *     calls for instances matching pkg will be logged.  Default is to log all messages (empty object).  Explicitly pass an empty object or null (not undefined) to remove filters.
    	 * @param {boolean} [options.capture] Turn log capture on or off.  This is meaningful in hybrid environments only.
    	 * @param {integer} [options.maxFileSize] Maximum amount of data (in bytes) to store in the file when capture is on.  This is meaningful in hybrid environments only.  Default is true.
    	 * @param {boolean} [options.autoSendLogs] Turn auto send Logs on or off.
		 * @param {string[]|string|number} [options.level] A list of one or more of the following items:
    	 * 		
    	 * 			An array of the log levels to show.  In JavaScript, only log calls at the listed levels are shown.  In native code in a hybrid app, log output at and above the most verbose of the levels listed in the array are shown.
    	 * 			The name of the log level at which to set the logger.  Output will be printed for log API calls at and above the configured level.
    	 * 			The Numeric Priority Level at which to set the logger.  Output will be printed for log API calls at and above the configured level.
    	 * 		
    	 * 		Default: Show all logs at all levels (empty array).
    	 * 
    	 * @returns {this} Returns the current instance.
    	 * 							 
    	 * @methodOf WL.Logger#
    	 */
    function config(options: Object): WL.LogInstance;

		/**
    	 * Shows the status (current configuration) of the logger.
    	 *
    	 * @example
    	 * WL.Logger.status()
    	 *
    	 * .then(function (state) {
    	 * //{ enabled : true, stringify: true, filters : {},
    	 * // level : 'info', pkg : '', tag: {level: false, pkg: true} }
    	 * })
    	 *
    	 * .fail(function (errMsg) {
    	 *   //errMsg = error message
    	 * });
    	 *
    	 * @returns {Promise} Resolved with current status, rejected with an error message.
    	 *
    	 * @methodOf WL.Logger#
    	 */
    function status(): WLPromise;

		/**
    	 * Updates the state (also called context or status) of the logger.
    	 *
    	 * @example
    	 * WL.Logger.debug('Hello world'); //No context passed
    	 * //Hello world
    	 *
    	 * WL.Logger.ctx({pkg: 'hello'}).debug('Hello world'); //Package name context passed
    	 * //[hello] Hello world
    	 *
    	 * Caution: filters, maxFileSize, capture, and level returned from this call may not accurately reflect the current behavior
    	 *    in hybrid applications if the native codebase has modified these settings in the native application layer.
    	 * 
    	 * @param {object} [options] See arguments defined for WL.Logger.config for information about the object that can be passed.
    	 * 
    	 * @returns {this} Returns the current instance.
    	 * 
    	 * @methodOf WL.Logger#
    	 */
    function ctx(options: Object): WL.LogInstance;

		/**
    	 * Prints arguments to the console. Has a priority of 600 and a level of TRACE.
    	 *
    	 * @example
    	 * WL.Logger.trace('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#trace
    	 */
    function trace(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 500 and a level of DEBUG.
    	 *
    	 * @example
    	 * WL.Logger.debug('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#debug
    	 */
    function debug(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 400 and a level of LOG.
    	 *
    	 * @example
    	 * WL.Logger.log('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#log
    	 */
    function log(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 300 and a level of INFO.
    	 *
    	 * @example
    	 * WL.Logger.info('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#info
    	 */
    function info(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 200 and a level of WARN.
    	 *
    	 * @example
    	 * WL.Logger.warn('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#warn
    	 */
    function warn(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 100 and a level of ERROR.
    	 *
    	 * @example
    	 * WL.Logger.error('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#error
    	 */
    function error(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 50 and a level of FATAL.  Only use this function for events that
    	 * are unrecoverable and completely break the application such that the user must force close their application.
    	 *
    	 * @example
    	 * WL.Logger.fatal('Hello world');
    	 * //Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#fatal
    	 */
    function fatal(message: any): void;

		/**
    	 * Creates an instance of a logger with its own context (also called status or state).
    	 * 
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'mypackage'});
    	 *
    	 * logger.trace('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.debug('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.log('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.info('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.warn('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.error('Hello world');
    	 * //[mypackage] Hello world
    	 *
    	 * logger.fatal('Hello world');
    	 * //[mypackage] Hello world
    	 * 
    	 * @param {Object} [options] See arguments defined for WL.Logger.config for information about the object that can be passed.
    	 *
    	 * @returns {LogInstance} Has the following methods from WL.Logger: .trace, .debug, .log, 
    	 * .info, .warn, .error, and .fatal.
    	 * @methodOf WL.Logger#
    	 */
    function create(options: Object): WL.LogInstance;

		/**
    	 * Attach additional metadata to the next logger instance call.
    	 * 
    	 * @example
    	 * WL.Logger.metadata(
    	 *     {
    	 *         userRealName : 'Robert Paulson'
    	 *     }
    	 * );
    	 * 
    	 * @example
    	 * WL.Logger.metadata( { hi : 'world' } ).info('hello');
    	 * 
    	 * @param {Object} [options] an object to attach to the next logger instance call
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#metadata
    	 */
    function metadata(options: Object): WL.LogInstance;

		/**
    	 *
    	 * Send any logs collected up to this point to the IBM MobileFirst server.
    	 * 
    	 * @returns {Promise} Resolved with success status, rejected with an error message.
    	 * 
    	 * @methodOf WL.Logger#
    	 * @name WL.Logger#send
    	 */
    function send(): WLPromise;

		/**
    	 * Retrieves and applies any matching configuration profile from the IBM MobileFirst Server.
    	 * A matching configuration profile acts as an override of the local configuration.
    	 * Configuration profiles are defined by the IBM Worklight administrator in the MobileFirst
    	 * admin console.  Restores to original settings when the server indicates that no
    	 * matching configuration profile exists.
    	 *
    	 * This API call is only applicable in Android and IOS environments.  It is a safe, but no-op,
    	 * call in other environments.
    	 *
    	 * @methodOf WL.Logger#
    	 * @return promise
    	 */
    function updateConfigFromServer(): WLPromise;
}

declare module WL{
  class LogInstance {

		/**
    	 * Prints arguments to the console. Has a priority of 600 and a level of TRACE.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.trace('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#trace
    	 */
     trace(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 500 and a level of DEBUG.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.debug('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#debug
    	 */
     debug(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 400 and a level of LOG.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.log('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 */
     log(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 300 and a level of INFO.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.info('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#info
    	 */
     info(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 200 and a level of WARN.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.warn('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#warn
    	 */
     warn(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 100 and a level of ERROR.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.error('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#error
    	 */
     error(message: any): void;

		/**
    	 * Prints arguments to the console. Has a priority of 50 and a level of FATAL.
    	 *
    	 * @example
    	 * var logger = WL.Logger.create({pkg: 'myapp'});
    	 * logger.fatal('Hello world');
    	 * //[myapp] Hello world
    	 *
    	 * @param message One or more messages of any data type.
    	 * 
    	 * @methodOf LogInstance#
    	 * @name LogInstance#fatal
    	 */
     fatal(message: any): void;
}
}

/**
 * ================================================================= 
 * Source file taken from :: wlproperties.d.ts
 * ================================================================= 
 */

declare module WL{

var AppProperty : {
  DOWNLOAD_APP_LINK: string,
  ENVIRONMENT: string,
  APP_DISPLAY_NAME: string,
  APP_LOGIN_TYPE: string,
  APP_VERSION: string,
  HEIGHT: string,
  IID: string,
  LATEST_VERSION: string,
  LOGIN_DISPLAY_TYPE: string,
  LOGIN_REALM: string,
  MAIN_FILE_PATH: string,
  SHOW_IN_TASKBAR: string,
  THUMBNAIL_IMAGE_URL: string,
  WELCOME_PAGE_URL: string,
  WIDTH: string,
  WORKLIGHT_ROOT_URL: string,
  WORKLIGHT_RELATIVE_URL: string,
  APP_SERVICES_URL: string,
  APP_SERVICES_RELATIVE_URL: string,
  WLCLIENT_TIMEOUT_IN_MILLIS: string
};

var AppLoginType : {
  LOGIN_ON_STARTUP: string,
  LOGIN_ON_DEMAND: string,
  NO_LOGIN: string
};

var UserInfo : {
  IS_USER_AUTHENTICATED: string,
  USER_NAME: string,
  LOGIN_NAME: string,
  USER_ID: string
};

var Orientation : {
  AUTO: number,
  LANDSCAPE: number,
  PORTRAIT: number
};

var FixedViewType : {
  TOP: string,
  BOTTOM: string
};

var Language : {
  DIRECTION_LTR: number,
  DIRECTION_RTL: number,
  LANGUAGES_RTL: string[]
};


var WLErrorCode : {
  UNEXPECTED_ERROR: string,
  API_INVOCATION_FAILURE: string,
  USER_INSTANCE_ACCESS_VIOLATION: string,
  AUTHENTICATION_REQUIRED: string,
  DOMAIN_ACCESS_FORBIDDEN: string,

  // Client Side Errors
  UNRESPONSIVE_HOST: string,
  LOGIN_FAILURE: string,
  REQUEST_TIMEOUT: string,
  PROCEDURE_ERROR: string,
  UNSUPPORTED_VERSION: string,
  UNSUPPORTED_BROWSER: string,
  DISABLED_COOKIES: string,
  CONNECTION_IN_PROGRESS: string,
  AUTHORIZATION_FAILURE: string,
  CHALLENGE_HANDLING_CANCELED: string
};

var FBRealmPopupOptions : {
  width: number,
  height: number
};

var EPField : {

  // NOTICE - value must be equal to the field name!!!
  SUPPORT_COOKIES: string,
  DESKTOP: string,
  WEB: string,
  MOBILE: string,
  USES_AUTHENTICATOR: string,
  SAVES_USERNAME: string,
  HAS_NATIVE_LOGGER: string,
  USES_NATIVE_TOOLBAR: string,
  USES_CORDOVA: string,
  SUPPORT_DIRECT_UPDATE_FROM_SERVER: string,
  SUPPORT_DIAGNOSTIC: string,
  ISIOS: string,
  WEB_BROWSER_ONLY: string,
  SUPPORT_CHALLENGE: string,
  SUPPORT_SHELL: string,
  SUPPORT_DEVICE_AUTH: string,
  SERVER_ADDRESS_CONFIGURABLE: string,
  SUPPORT_WL_USER_PREF: string,
  SUPPORT_WL_NATIVE_XHR: string,
  SUPPORT_WL_SERVER_CHANGE: string,
  SUPPORT_OAUTH: string
};


var BaseProfileData : {
  SUPPORT_COOKIES: boolean,
  SUPPORT_DIRECT_UPDATE_FROM_SERVER: boolean,
  SUPPORT_DIAGNOSTIC: boolean,
  SUPPORT_DEVICE_AUTH: boolean,
  SERVER_ADDRESS_CONFIGURABLE: boolean,
  SUPPORT_WL_USER_PREF: boolean
};

var WebProfileData : {
  WEB: boolean
};


var DesktopProfileData : {
  DESKTOP: boolean,
  USES_AUTHENTICATOR: boolean,
  SAVES_USERNAME: boolean
};

var MobileProfileData : {
  USES_AUTHENTICATOR: boolean,
  SAVES_USERNAME: boolean
};

}

/**
 * ================================================================= 
 * Source file taken from :: wlresourcerequest.d.ts
 * ================================================================= 
 */

declare class WLResourceRequest {

    /**
 	* @class
 	* The WLResourceRequest object is used to send a request to any protected or unprotected resource using an absolute or relative URL.
 	* It exposes a set of methods that allow you to set up and configure the requested object.
 	*
 	* If a request is sent to a protected resource, the <code>WLResourceRequest object automatically handles the MobileFirst OAuth-based security model
 	* protocol and invokes the required challenges.
 	* The WLAuthorizationManager and WLResourceRequest classes are supported for the following environments only:
 	* Android, iOS, Windows 8.1, Window 10 UWP and Web.
 	*
 	* @param {string} url Mandatory. Specifies absolute or relative URL. If you send a request to an adapter, you must add the /adapters path element.
 	* For example: /adapters/myAdapterName/myMethodName
	* @param {string} method Mandatory. Request method, usually WLResourceRequest.GET or WLResourceRequest.POST
  * @param {object} options Optional. An object containing the following properties:
  *
  *      options.timeout: (integer) Optional. Request timeout, in milliseconds.
  *      options.scope: (string) Optional. Protecting scope of the requested resource.
  *
 	*
 	* @example
 	* var request = new WLResourceRequest('/adapters/sampleAdapter/multiplyNumbers', WLResourceRequest.GET);
 	* request.setQueryParameter('params', [5, 6]);
 	* request.send().then(
 	*      function(response) {
 	*          // success flow, the result can be found in response.responseJSON
 	*      },
 	*      function(error) {
 	*          // failure flow
 	*          // the error code and description can be found in error.errorCode and error.errorMsg fields respectively
 	*      }
 	* );
 	*
 	* @name WLResourceRequest
 	*/
    	constructor(_url: string, _method: string, _options?: Object);

		/**
         * @description Returns request URL. The URL must have been passed to the constructor.
         * @methodOf WLResourceRequest#
         */
		getUrl(): string;

		/**
         * @description Returns current request method. A valid request method must have been passed to constructor.
         * @methodOf WLResourceRequest#
         */
		getMethod(): string;

		/**
         * @description Returns query parameters as a JSON object with key-value pairs.
         * @methodOf WLResourceRequest#
         */
		getQueryParameters(): Object;

		/**
    	 * @description Sets query parameters.
    	 * @param {object} parameters Optional. A JSON object with key-value pairs.
    	 * If this parameter is null, or undefined, the query parameters are cleared.
         * @methodOf WLResourceRequest#
    	 */
		setQueryParameters(parameters?: Object): void;

		/**
    	 * @description Sets a new query parameter. If a parameter with the same name already exists, it will be replaced.
    	 * @param {String} name Mandatory. Parameter name.
    	 * @param value Mandatory. Parameter value. Should be string, number or boolean.
         * @methodOf WLResourceRequest#
    	 */
		setQueryParameter(name: string, value: string|number|boolean): void;

		/**
    	 * @description Returns array of header values.
    	 * @param {string} name Optional. Header name. If header name is specified, this function returns an array of header values
    	 * stored with this header, or undefined, if the specified header name is not found. If name is null, or undefined,
    	 * this function returns all headers.
         * @methodOf WLResourceRequest#
    	 */
		getHeaders(name?: string): Object[];

		/**
    	 * @description Returns array of header names. It can be empty, if no headers have been added.
         * @methodOf WLResourceRequest#
    	 */
		getHeaderNames(): string[];

		/**
    	 * @description Returns a first header value stored with the specified header name. The value is returned as a string.
    	 * Can be undefined if a header with the specified name does not exist.
    	 * @param {String} name Mandatory. Header name.
         * @methodOf WLResourceRequest#
    	 */
		getHeader(name: string): string;

		/**
    	 * @description Sets request headers. The existing headers are replaced.
    	 * @param {Object} requestHeaders Optional. JSON object with request headers. Each header value should be either string, or array of strings. This function
    	 * throws an error if one of the specified header values is not valid. If this parameter is not specified, all headers will be removed.
         * @methodOf WLResourceRequest#
    	 */
		setHeaders(requestHeaders?: Object): void;

		/**
    	 * @description Sets a new header or replaces an existing header with the same name.
    	 * @param {String} name Mandatory. Header name.
    	 * @param value Mandatory. Header value. The value must be of a simple type (string, boolean or value).
         * @methodOf WLResourceRequest#
    	 */
		setHeader(name: string, value: string|number|boolean): void;

		/**
    	 * @description Adds a new header. If a header with the same name already exists, the header value will be added to the existing header. The name is
    	 * case insensitive.
    	 * @param {String} name Mandatory. Header name.
    	 * @param value Mandatory. Header value. The value must be of a simple type (string, number or boolean).
         * @methodOf WLResourceRequest#
    	 */
		addHeader(name: string, value: string|number|boolean): void;

		/**
    	 * @description Returns request timeout, in milliseconds.
         * @methodOf WLResourceRequest#
    	 */
		getTimeout(): number;

		/**
    	 * @description Sets request timeout. If timeout is not specified, then a default timeout will be used.
    	 * @param {Integer} requestTimeout Mandatory. Request timeout, in milliseconds.
         * @methodOf WLResourceRequest#
    	 */
		setTimeout(requestTimeout: number): void;

		/**
    	 * @description Sends the request to a server.
    	 * @param content Optional. Body content. It can be of a simple type (like string), object, or undefined.
    	 * @returns Promise
         * @example
    	 * var request = WLResourceRequest(url, method, timeout);
    	 * request.send(content).then(
    	 *   function(response) {
    	 *     // success flow
    	 *   },
    	 * 	 function(error) {
    	 *     // fail flow
    	 *   }
    	 * );
         *
         * @methodOf WLResourceRequest#
    	 */
		send(content?: any): WLPromise;

		/**
    	 * @description Sends the request to a server with URL encoded form parameters.
    	 * @param {Object} json Mandatory. Body content as JSON object or string as form data. The JSON object values must be a simple type.
    	 * The content type will be set to application/x-www-form-urlencoded.
    	 * @returns Promise
         * @example
    	 * var request = WLResourceRequest(url, method, options);
    	 * request.send(json).then(
    	 *   function(response) {
    	 *     // success flow
    	 *   },
    	 *   function(error) {
    	 *     // fail flow
    	 *   }
    	 * );
    	 *
         * @methodOf WLResourceRequest#
    	 */
		sendFormParameters(json: Object): WLPromise;

    static GET: string;
	static POST: string;
	static PUT: string;
	static DELETE: string;
	static HEAD: string;
	static OPTIONS: string;
	static TRACE: string;
	static CONNECT: string;
}


/**
 * ================================================================= 
 * Source file taken from :: worklight.d.ts
 * ================================================================= 
 */

declare module WL.Events {
	var WORKLIGHT_IS_CONNECTED: string;
	var WORKLIGHT_IS_DISCONNECTED: string;
}	

declare module WL.Environment {
	var PREVIEW: string;
	var IPHONE: string;
	var IPAD: string;
	var DESKTOPBROWSER: string;
	var ANDROID: string;
	var WINDOWS_PHONE_8: string;
	var WINDOWS8: string;
	var MOBILE_WEB: string;
}

declare class WLPromise{
    state():string;
    always():Object;
    then(onSuccess?:Function, onFailure?:Function, onProgress?:Function):WLPromise;
    promise(obj?:Object):Object;
    fail(failCallbacks:Function|Function[], additionalFailCallbacks?:Function|Function[]):WLPromise;
    done(doneCallbacks:Function|Function[], additionalDoneCallbacks?:Function|Function[]):WLPromise;
    progress(progressCallbacks:Function|Function[], additionalProgressCallbacks?:Function|Function[]):WLPromise;
}