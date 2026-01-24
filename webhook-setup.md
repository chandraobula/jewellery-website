# Sanity Webhook Setup for AWS Amplify

## Overview
This guide will help you set up a webhook in Sanity that automatically triggers a new build and deployment on AWS Amplify whenever content is published.

## Step 1: Get Your AWS Amplify Build Webhook URL

1. Go to your AWS Amplify console
2. Select your JewelCraft app
3. Go to "App settings" → "Build settings"
4. Scroll down to "Build webhooks"
5. Click "Create webhook"
6. Give it a name: "Sanity Content Update"
7. Select the branch you want to deploy (usually `main` or `master`)
8. Copy the webhook URL (it will look like: `https://webhook.amplify.us-east-1.amazonaws.com/prod/v1/webhooks/...`)

## Step 2: Configure Sanity Webhook

1. Go to your Sanity project dashboard
2. Navigate to "API" → "Webhooks"
3. Click "Create webhook"
4. Configure the webhook:
   - **Name**: AWS Amplify Deploy
   - **URL**: Paste the Amplify webhook URL from Step 1
   - **Dataset**: Select your dataset (usually `production`)
   - **Trigger on**: Select "Create", "Update", "Delete"
   - **Filter**: Leave empty to trigger on all document types, or use:
     ```
     _type in ["product", "category", "testimonial", "page", "siteSettings"]
     ```
   - **Secret**: (Optional) Generate a secret for security
   - **HTTP method**: POST
   - **API version**: v2024-01-01

## Step 3: Test the Webhook

1. Make a small change to a product in Sanity Studio
2. Publish the change
3. Check your AWS Amplify console to see if a new build is triggered
4. Monitor the build logs to ensure it completes successfully

## Step 4: Environment Variables Setup

Make sure these environment variables are set in your AWS Amplify app:

### In Amplify Console:
1. Go to "App settings" → "Environment variables"
2. Add these variables:
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01
   VITE_SANITY_USE_CDN=true
   ```

## Step 5: Build Configuration

Your `amplify.yml` build file should look like this:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Troubleshooting

### Webhook Not Triggering
- Check the webhook URL is correct
- Verify the webhook is enabled in Sanity
- Check Sanity webhook logs for errors
- Ensure the filter is set correctly

### Build Failing
- Check environment variables are set correctly
- Verify Sanity project ID and dataset name
- Check build logs for specific error messages

### Slow Builds
- Consider using Sanity's CDN for faster data fetching
- Optimize your Sanity queries
- Use image optimization in your queries

## Security Considerations

1. **Webhook Secret**: Always use a secret for your webhook
2. **IP Restrictions**: Consider restricting webhook access to AWS IP ranges
3. **Environment Variables**: Never commit sensitive tokens to your repository

## Monitoring

Set up monitoring for:
- Webhook delivery success/failure rates
- Build completion times
- Content update frequency
- Error rates

## Advanced Configuration

### Conditional Deployments
You can modify the webhook filter to only trigger on specific document types:

```
_type in ["product", "category"] && !(_id in path("drafts.**"))
```

### Multiple Environments
For staging and production environments, create separate webhooks pointing to different Amplify apps.

## Support

If you encounter issues:
1. Check AWS Amplify build logs
2. Review Sanity webhook delivery logs
3. Verify network connectivity between Sanity and AWS
4. Test with a simple webhook first before complex configurations
