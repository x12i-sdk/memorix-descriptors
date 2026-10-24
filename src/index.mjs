import assert from 'node:assert/strict';
import { buildAssociatedPropertyName, validateAssociatedPropertyName, buildIdentityString } from '@x12i/memorix-descriptors';
const property = buildAssociatedPropertyName({ form: 'enrichment', objectType: 'network-assets' });
assert.equal(property, 'associatedNetworkAssetsEnrichment');
validateAssociatedPropertyName(property);
const identity = buildIdentityString({ kind: 'assetIp', ip: '192.0.2.10' });
assert.equal(identity, 'assetIp:192.0.2.10');
console.log({ property, identity });
