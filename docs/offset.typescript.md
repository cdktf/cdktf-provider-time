# `offset` Submodule <a name="`offset` Submodule" id="@cdktf/provider-time.offset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.offset.Offset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.offset.Offset.Initializer"></a>

```typescript
import { offset } from '@cdktf/provider-time'

new offset.Offset(scope: Construct, id: string, config?: OffsetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.offset.Offset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.offset.Offset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetBaseRfc3339">resetBaseRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetDays">resetOffsetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetHours">resetOffsetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMinutes">resetOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMonths">resetOffsetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetYears">resetOffsetYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.offset.Offset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.offset.Offset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.offset.Offset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-time.offset.Offset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.offset.Offset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.offset.Offset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-time.offset.Offset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-time.offset.Offset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-time.offset.Offset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-time.offset.Offset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-time.offset.Offset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBaseRfc3339` <a name="resetBaseRfc3339" id="@cdktf/provider-time.offset.Offset.resetBaseRfc3339"></a>

```typescript
public resetBaseRfc3339(): void
```

##### `resetOffsetDays` <a name="resetOffsetDays" id="@cdktf/provider-time.offset.Offset.resetOffsetDays"></a>

```typescript
public resetOffsetDays(): void
```

##### `resetOffsetHours` <a name="resetOffsetHours" id="@cdktf/provider-time.offset.Offset.resetOffsetHours"></a>

```typescript
public resetOffsetHours(): void
```

##### `resetOffsetMinutes` <a name="resetOffsetMinutes" id="@cdktf/provider-time.offset.Offset.resetOffsetMinutes"></a>

```typescript
public resetOffsetMinutes(): void
```

##### `resetOffsetMonths` <a name="resetOffsetMonths" id="@cdktf/provider-time.offset.Offset.resetOffsetMonths"></a>

```typescript
public resetOffsetMonths(): void
```

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="@cdktf/provider-time.offset.Offset.resetOffsetSeconds"></a>

```typescript
public resetOffsetSeconds(): void
```

##### `resetOffsetYears` <a name="resetOffsetYears" id="@cdktf/provider-time.offset.Offset.resetOffsetYears"></a>

```typescript
public resetOffsetYears(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.offset.Offset.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.offset.Offset.isConstruct"></a>

```typescript
import { offset } from '@cdktf/provider-time'

offset.Offset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-time.offset.Offset.isTerraformElement"></a>

```typescript
import { offset } from '@cdktf/provider-time'

offset.Offset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-time.offset.Offset.isTerraformResource"></a>

```typescript
import { offset } from '@cdktf/provider-time'

offset.Offset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-time.offset.Offset.generateConfigForImport"></a>

```typescript
import { offset } from '@cdktf/provider-time'

offset.Offset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Offset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Offset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Offset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.rfc3339">rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.unix">unix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339Input">baseRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDaysInput">offsetDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHoursInput">offsetHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutesInput">offsetMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonthsInput">offsetMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYearsInput">offsetYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339">baseRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDays">offsetDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHours">offsetHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutes">offsetMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonths">offsetMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYears">offsetYears</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.offset.Offset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.offset.Offset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.offset.Offset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.offset.Offset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.offset.Offset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.offset.Offset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.Offset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.Offset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.offset.Offset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.offset.Offset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.Offset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.Offset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.offset.Offset.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.offset.Offset.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.offset.Offset.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.offset.Offset.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.offset.Offset.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.offset.Offset.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.offset.Offset.property.unix"></a>

```typescript
public readonly unix: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.offset.Offset.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `baseRfc3339Input`<sup>Optional</sup> <a name="baseRfc3339Input" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339Input"></a>

```typescript
public readonly baseRfc3339Input: string;
```

- *Type:* string

---

##### `offsetDaysInput`<sup>Optional</sup> <a name="offsetDaysInput" id="@cdktf/provider-time.offset.Offset.property.offsetDaysInput"></a>

```typescript
public readonly offsetDaysInput: number;
```

- *Type:* number

---

##### `offsetHoursInput`<sup>Optional</sup> <a name="offsetHoursInput" id="@cdktf/provider-time.offset.Offset.property.offsetHoursInput"></a>

```typescript
public readonly offsetHoursInput: number;
```

- *Type:* number

---

##### `offsetMinutesInput`<sup>Optional</sup> <a name="offsetMinutesInput" id="@cdktf/provider-time.offset.Offset.property.offsetMinutesInput"></a>

```typescript
public readonly offsetMinutesInput: number;
```

- *Type:* number

---

##### `offsetMonthsInput`<sup>Optional</sup> <a name="offsetMonthsInput" id="@cdktf/provider-time.offset.Offset.property.offsetMonthsInput"></a>

```typescript
public readonly offsetMonthsInput: number;
```

- *Type:* number

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="@cdktf/provider-time.offset.Offset.property.offsetSecondsInput"></a>

```typescript
public readonly offsetSecondsInput: number;
```

- *Type:* number

---

##### `offsetYearsInput`<sup>Optional</sup> <a name="offsetYearsInput" id="@cdktf/provider-time.offset.Offset.property.offsetYearsInput"></a>

```typescript
public readonly offsetYearsInput: number;
```

- *Type:* number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.offset.Offset.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `baseRfc3339`<sup>Required</sup> <a name="baseRfc3339" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339"></a>

```typescript
public readonly baseRfc3339: string;
```

- *Type:* string

---

##### `offsetDays`<sup>Required</sup> <a name="offsetDays" id="@cdktf/provider-time.offset.Offset.property.offsetDays"></a>

```typescript
public readonly offsetDays: number;
```

- *Type:* number

---

##### `offsetHours`<sup>Required</sup> <a name="offsetHours" id="@cdktf/provider-time.offset.Offset.property.offsetHours"></a>

```typescript
public readonly offsetHours: number;
```

- *Type:* number

---

##### `offsetMinutes`<sup>Required</sup> <a name="offsetMinutes" id="@cdktf/provider-time.offset.Offset.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* number

---

##### `offsetMonths`<sup>Required</sup> <a name="offsetMonths" id="@cdktf/provider-time.offset.Offset.property.offsetMonths"></a>

```typescript
public readonly offsetMonths: number;
```

- *Type:* number

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="@cdktf/provider-time.offset.Offset.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

---

##### `offsetYears`<sup>Required</sup> <a name="offsetYears" id="@cdktf/provider-time.offset.Offset.property.offsetYears"></a>

```typescript
public readonly offsetYears: number;
```

- *Type:* number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.offset.Offset.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.offset.Offset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.offset.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.offset.OffsetConfig.Initializer"></a>

```typescript
import { offset } from '@cdktf/provider-time'

const offsetConfig: offset.OffsetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339">baseRfc3339</a></code> | <code>string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetDays">offsetDays</a></code> | <code>number</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetHours">offsetHours</a></code> | <code>number</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes">offsetMinutes</a></code> | <code>number</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths">offsetMonths</a></code> | <code>number</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetYears">offsetYears</a></code> | <code>number</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.OffsetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.OffsetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.offset.OffsetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.offset.OffsetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.OffsetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.OffsetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.OffsetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseRfc3339`<sup>Optional</sup> <a name="baseRfc3339" id="@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339"></a>

```typescript
public readonly baseRfc3339: string;
```

- *Type:* string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `offsetDays`<sup>Optional</sup> <a name="offsetDays" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetDays"></a>

```typescript
public readonly offsetDays: number;
```

- *Type:* number

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_days Offset#offset_days}

---

##### `offsetHours`<sup>Optional</sup> <a name="offsetHours" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetHours"></a>

```typescript
public readonly offsetHours: number;
```

- *Type:* number

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_hours Offset#offset_hours}

---

##### `offsetMinutes`<sup>Optional</sup> <a name="offsetMinutes" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* number

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_minutes Offset#offset_minutes}

---

##### `offsetMonths`<sup>Optional</sup> <a name="offsetMonths" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths"></a>

```typescript
public readonly offsetMonths: number;
```

- *Type:* number

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_months Offset#offset_months}

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_seconds Offset#offset_seconds}

---

##### `offsetYears`<sup>Optional</sup> <a name="offsetYears" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetYears"></a>

```typescript
public readonly offsetYears: number;
```

- *Type:* number

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#offset_years Offset#offset_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.offset.OffsetConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.13.1/docs/resources/offset#triggers Offset#triggers}

---



