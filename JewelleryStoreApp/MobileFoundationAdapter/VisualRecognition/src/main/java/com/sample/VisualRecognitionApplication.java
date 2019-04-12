/*
 *    Licensed Materials - Property of IBM
 *    5725-I43 (C) Copyright IBM Corp. 2015, 2016. All Rights Reserved.
 *    US Government Users Restricted Rights - Use, duplication or
 *    disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

package com.sample;


import javax.ws.rs.core.Context;
import java.util.logging.Logger;
import com.amazonaws.SDKGlobalConfiguration;
import com.ibm.oauth.BasicIBMOAuthCredentials;
import com.ibm.oauth.IBMOAuthCredentials;
import com.ibm.oauth.OAuthServiceException;
import com.ibm.mfp.adapter.api.MFPJAXRSApplication;
import com.ibm.mfp.adapter.api.ConfigurationAPI;
import com.ibm.mfp.adapter.api.OAuthSecurity;

@OAuthSecurity(enabled=false)
public class VisualRecognitionApplication extends MFPJAXRSApplication{
	@Context
	ConfigurationAPI configurationAPI;

	static Logger logger = Logger.getLogger(VisualRecognitionApplication.class.getName());
	
	private IBMOAuthCredentials oAuthCreds = null;
	private String baseUrl = "";
	private String recommendationEngineURL = "";
	public String visualRecognitionURL = "";
	
	protected void init() throws Exception {
		
		logger.info("Initializing adapter...");
		
		String endpointURL = configurationAPI.getPropertyValue("endpointURL");
		String bucketName = configurationAPI.getPropertyValue("bucketName");
		String serviceId = configurationAPI.getPropertyValue("serviceId");
		String apiKey = configurationAPI.getPropertyValue("apiKey");
		String recommendationEngine = configurationAPI.getPropertyValue("recommendationEngine");
		String visualRecognition = configurationAPI.getPropertyValue("visualRecognition");

		this.recommendationEngineURL= recommendationEngine;
		this.visualRecognitionURL= visualRecognition;
		
		if (!endpointURL.isEmpty() && !bucketName.isEmpty() && !serviceId.isEmpty() && !apiKey.isEmpty()) {
			try {
				SDKGlobalConfiguration.IAM_ENDPOINT = "https://iam.bluemix.net/oidc/token";
				oAuthCreds = new BasicIBMOAuthCredentials(apiKey, serviceId);
				// initialize fetching and caching of token
				oAuthCreds.getTokenManager().getToken();
				this.baseUrl = endpointURL + "/" + bucketName + "/";
			} catch (OAuthServiceException e) {
				throw new Exception("Unable to connect to Object Storage, check the configuration.");
			}
		}

		logger.info("Adapter initialized!");
	}
	
	public ObjectStorageAccess getObjectStorageAccess() {
		return new ObjectStorageAccess(this.baseUrl, oAuthCreds.getTokenManager().getToken());
	}

	public RecommendationEngineAccess getRecommendationEngineAccess(){
		return new RecommendationEngineAccess(this.recommendationEngineURL);
	}

	public VisualRecognitionAccess getVisualRecognitionAccess(){
		return new VisualRecognitionAccess(this.visualRecognitionURL);
	}

	protected void destroy() throws Exception {
		logger.info("Adapter destroyed!");
	}

	protected String getPackageToScan() {
		//The package of this class will be scanned (recursively) to find JAX-RS resources. 
		//It is also possible to override "getPackagesToScan" method in order to return more than one package for scanning
		return getClass().getPackage().getName();
	}
}
