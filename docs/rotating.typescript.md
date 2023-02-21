# `rotating` Submodule <a name="`rotating` Submodule" id="@cdktf/provider-time.rotating"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Rotating <a name="Rotating" id="@cdktf/provider-time.rotating.Rotating"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.rotating.Rotating.Initializer"></a>

```typescript
import { rotating } from '@cdktf/provider-time'

new rotating.Rotating(scope: Construct, id: string, config?: RotatingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRfc3339">resetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationDays">resetRotationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationHours">resetRotationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMinutes">resetRotationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMonths">resetRotationMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339">resetRotationRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationYears">resetRotationYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.rotating.Rotating.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.rotating.Rotating.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.rotating.Rotating.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.rotating.Rotating.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRfc3339` <a name="resetRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRfc3339"></a>

```typescript
public resetRfc3339(): void
```

##### `resetRotationDays` <a name="resetRotationDays" id="@cdktf/provider-time.rotating.Rotating.resetRotationDays"></a>

```typescript
public resetRotationDays(): void
```

##### `resetRotationHours` <a name="resetRotationHours" id="@cdktf/provider-time.rotating.Rotating.resetRotationHours"></a>

```typescript
public resetRotationHours(): void
```

##### `resetRotationMinutes` <a name="resetRotationMinutes" id="@cdktf/provider-time.rotating.Rotating.resetRotationMinutes"></a>

```typescript
public resetRotationMinutes(): void
```

##### `resetRotationMonths` <a name="resetRotationMonths" id="@cdktf/provider-time.rotating.Rotating.resetRotationMonths"></a>

```typescript
public resetRotationMonths(): void
```

##### `resetRotationRfc3339` <a name="resetRotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339"></a>

```typescript
public resetRotationRfc3339(): void
```

##### `resetRotationYears` <a name="resetRotationYears" id="@cdktf/provider-time.rotating.Rotating.resetRotationYears"></a>

```typescript
public resetRotationYears(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.rotating.Rotating.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.rotating.Rotating.isConstruct"></a>

```typescript
import { rotating } from '@cdktf/provider-time'

rotating.Rotating.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement"></a>

```typescript
import { rotating } from '@cdktf/provider-time'

rotating.Rotating.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource"></a>

```typescript
import { rotating } from '@cdktf/provider-time'

rotating.Rotating.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.unix">unix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339Input">rfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput">rotationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput">rotationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput">rotationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput">rotationMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input">rotationRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput">rotationYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339">rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDays">rotationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHours">rotationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutes">rotationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonths">rotationMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339">rotationRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYears">rotationYears</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.rotating.Rotating.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.rotating.Rotating.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.rotating.Rotating.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.rotating.Rotating.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.Rotating.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.Rotating.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.rotating.Rotating.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.rotating.Rotating.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.Rotating.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.Rotating.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.rotating.Rotating.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.rotating.Rotating.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.rotating.Rotating.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.rotating.Rotating.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.rotating.Rotating.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.rotating.Rotating.property.unix"></a>

```typescript
public readonly unix: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.rotating.Rotating.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `rfc3339Input`<sup>Optional</sup> <a name="rfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339Input"></a>

```typescript
public readonly rfc3339Input: string;
```

- *Type:* string

---

##### `rotationDaysInput`<sup>Optional</sup> <a name="rotationDaysInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput"></a>

```typescript
public readonly rotationDaysInput: number;
```

- *Type:* number

---

##### `rotationHoursInput`<sup>Optional</sup> <a name="rotationHoursInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput"></a>

```typescript
public readonly rotationHoursInput: number;
```

- *Type:* number

---

##### `rotationMinutesInput`<sup>Optional</sup> <a name="rotationMinutesInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput"></a>

```typescript
public readonly rotationMinutesInput: number;
```

- *Type:* number

---

##### `rotationMonthsInput`<sup>Optional</sup> <a name="rotationMonthsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput"></a>

```typescript
public readonly rotationMonthsInput: number;
```

- *Type:* number

---

##### `rotationRfc3339Input`<sup>Optional</sup> <a name="rotationRfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input"></a>

```typescript
public readonly rotationRfc3339Input: string;
```

- *Type:* string

---

##### `rotationYearsInput`<sup>Optional</sup> <a name="rotationYearsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput"></a>

```typescript
public readonly rotationYearsInput: number;
```

- *Type:* number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.rotating.Rotating.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

---

##### `rotationDays`<sup>Required</sup> <a name="rotationDays" id="@cdktf/provider-time.rotating.Rotating.property.rotationDays"></a>

```typescript
public readonly rotationDays: number;
```

- *Type:* number

---

##### `rotationHours`<sup>Required</sup> <a name="rotationHours" id="@cdktf/provider-time.rotating.Rotating.property.rotationHours"></a>

```typescript
public readonly rotationHours: number;
```

- *Type:* number

---

##### `rotationMinutes`<sup>Required</sup> <a name="rotationMinutes" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutes"></a>

```typescript
public readonly rotationMinutes: number;
```

- *Type:* number

---

##### `rotationMonths`<sup>Required</sup> <a name="rotationMonths" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonths"></a>

```typescript
public readonly rotationMonths: number;
```

- *Type:* number

---

##### `rotationRfc3339`<sup>Required</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339"></a>

```typescript
public readonly rotationRfc3339: string;
```

- *Type:* string

---

##### `rotationYears`<sup>Required</sup> <a name="rotationYears" id="@cdktf/provider-time.rotating.Rotating.property.rotationYears"></a>

```typescript
public readonly rotationYears: number;
```

- *Type:* number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.rotating.Rotating.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.rotating.Rotating.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.rotating.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.rotating.RotatingConfig.Initializer"></a>

```typescript
import { rotating } from '@cdktf/provider-time'

const rotatingConfig: rotating.RotatingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339">rfc3339</a></code> | <code>string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays">rotationDays</a></code> | <code>number</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours">rotationHours</a></code> | <code>number</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes">rotationMinutes</a></code> | <code>number</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths">rotationMonths</a></code> | <code>number</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339">rotationRfc3339</a></code> | <code>string</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears">rotationYears</a></code> | <code>number</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.RotatingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.RotatingConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.rotating.RotatingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.RotatingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.RotatingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rfc3339 Rotating#rfc3339}

---

##### `rotationDays`<sup>Optional</sup> <a name="rotationDays" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays"></a>

```typescript
public readonly rotationDays: number;
```

- *Type:* number

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_days Rotating#rotation_days}

---

##### `rotationHours`<sup>Optional</sup> <a name="rotationHours" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours"></a>

```typescript
public readonly rotationHours: number;
```

- *Type:* number

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_hours Rotating#rotation_hours}

---

##### `rotationMinutes`<sup>Optional</sup> <a name="rotationMinutes" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes"></a>

```typescript
public readonly rotationMinutes: number;
```

- *Type:* number

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `rotationMonths`<sup>Optional</sup> <a name="rotationMonths" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths"></a>

```typescript
public readonly rotationMonths: number;
```

- *Type:* number

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_months Rotating#rotation_months}

---

##### `rotationRfc3339`<sup>Optional</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339"></a>

```typescript
public readonly rotationRfc3339: string;
```

- *Type:* string

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `rotationYears`<sup>Optional</sup> <a name="rotationYears" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears"></a>

```typescript
public readonly rotationYears: number;
```

- *Type:* number

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_years Rotating#rotation_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.rotating.RotatingConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#triggers Rotating#triggers}

---



