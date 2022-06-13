# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.Offset"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.Offset.Initializer"></a>

```typescript
import { Offset } from '@cdktf/provider-time'

new Offset(scope: Construct, id: string, config?: OffsetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Offset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.Offset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.Offset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.OffsetConfig">OffsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.Offset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Offset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.Offset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.OffsetConfig">OffsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Offset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.Offset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.Offset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.Offset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.Offset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetBaseRfc3339">resetBaseRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetDays">resetOffsetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetHours">resetOffsetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetMinutes">resetOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetMonths">resetOffsetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetOffsetYears">resetOffsetYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.Offset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.Offset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.Offset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.Offset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.Offset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.Offset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.Offset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.Offset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.Offset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.Offset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.Offset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.Offset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.Offset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.Offset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.Offset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.Offset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.Offset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.Offset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBaseRfc3339` <a name="resetBaseRfc3339" id="@cdktf/provider-time.Offset.resetBaseRfc3339"></a>

```typescript
public resetBaseRfc3339(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-time.Offset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOffsetDays` <a name="resetOffsetDays" id="@cdktf/provider-time.Offset.resetOffsetDays"></a>

```typescript
public resetOffsetDays(): void
```

##### `resetOffsetHours` <a name="resetOffsetHours" id="@cdktf/provider-time.Offset.resetOffsetHours"></a>

```typescript
public resetOffsetHours(): void
```

##### `resetOffsetMinutes` <a name="resetOffsetMinutes" id="@cdktf/provider-time.Offset.resetOffsetMinutes"></a>

```typescript
public resetOffsetMinutes(): void
```

##### `resetOffsetMonths` <a name="resetOffsetMonths" id="@cdktf/provider-time.Offset.resetOffsetMonths"></a>

```typescript
public resetOffsetMonths(): void
```

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="@cdktf/provider-time.Offset.resetOffsetSeconds"></a>

```typescript
public resetOffsetSeconds(): void
```

##### `resetOffsetYears` <a name="resetOffsetYears" id="@cdktf/provider-time.Offset.resetOffsetYears"></a>

```typescript
public resetOffsetYears(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.Offset.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Offset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.Offset.isConstruct"></a>

```typescript
import { Offset } from '@cdktf/provider-time'

Offset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.Offset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Offset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.Offset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.rfc3339">rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.unix">unix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.baseRfc3339Input">baseRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetDaysInput">offsetDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetHoursInput">offsetHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetMinutesInput">offsetMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetMonthsInput">offsetMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetYearsInput">offsetYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.baseRfc3339">baseRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetDays">offsetDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetHours">offsetHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetMinutes">offsetMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetMonths">offsetMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.offsetYears">offsetYears</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Offset.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.Offset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.Offset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.Offset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.Offset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.Offset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.Offset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.Offset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.Offset.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.Offset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.Offset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.Offset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.Offset.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.Offset.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.Offset.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.Offset.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.Offset.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.Offset.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.Offset.property.unix"></a>

```typescript
public readonly unix: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.Offset.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `baseRfc3339Input`<sup>Optional</sup> <a name="baseRfc3339Input" id="@cdktf/provider-time.Offset.property.baseRfc3339Input"></a>

```typescript
public readonly baseRfc3339Input: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-time.Offset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `offsetDaysInput`<sup>Optional</sup> <a name="offsetDaysInput" id="@cdktf/provider-time.Offset.property.offsetDaysInput"></a>

```typescript
public readonly offsetDaysInput: number;
```

- *Type:* number

---

##### `offsetHoursInput`<sup>Optional</sup> <a name="offsetHoursInput" id="@cdktf/provider-time.Offset.property.offsetHoursInput"></a>

```typescript
public readonly offsetHoursInput: number;
```

- *Type:* number

---

##### `offsetMinutesInput`<sup>Optional</sup> <a name="offsetMinutesInput" id="@cdktf/provider-time.Offset.property.offsetMinutesInput"></a>

```typescript
public readonly offsetMinutesInput: number;
```

- *Type:* number

---

##### `offsetMonthsInput`<sup>Optional</sup> <a name="offsetMonthsInput" id="@cdktf/provider-time.Offset.property.offsetMonthsInput"></a>

```typescript
public readonly offsetMonthsInput: number;
```

- *Type:* number

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="@cdktf/provider-time.Offset.property.offsetSecondsInput"></a>

```typescript
public readonly offsetSecondsInput: number;
```

- *Type:* number

---

##### `offsetYearsInput`<sup>Optional</sup> <a name="offsetYearsInput" id="@cdktf/provider-time.Offset.property.offsetYearsInput"></a>

```typescript
public readonly offsetYearsInput: number;
```

- *Type:* number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.Offset.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `baseRfc3339`<sup>Required</sup> <a name="baseRfc3339" id="@cdktf/provider-time.Offset.property.baseRfc3339"></a>

```typescript
public readonly baseRfc3339: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Offset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `offsetDays`<sup>Required</sup> <a name="offsetDays" id="@cdktf/provider-time.Offset.property.offsetDays"></a>

```typescript
public readonly offsetDays: number;
```

- *Type:* number

---

##### `offsetHours`<sup>Required</sup> <a name="offsetHours" id="@cdktf/provider-time.Offset.property.offsetHours"></a>

```typescript
public readonly offsetHours: number;
```

- *Type:* number

---

##### `offsetMinutes`<sup>Required</sup> <a name="offsetMinutes" id="@cdktf/provider-time.Offset.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* number

---

##### `offsetMonths`<sup>Required</sup> <a name="offsetMonths" id="@cdktf/provider-time.Offset.property.offsetMonths"></a>

```typescript
public readonly offsetMonths: number;
```

- *Type:* number

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="@cdktf/provider-time.Offset.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

---

##### `offsetYears`<sup>Required</sup> <a name="offsetYears" id="@cdktf/provider-time.Offset.property.offsetYears"></a>

```typescript
public readonly offsetYears: number;
```

- *Type:* number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.Offset.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Offset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.Offset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Rotating <a name="Rotating" id="@cdktf/provider-time.Rotating"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.Rotating.Initializer"></a>

```typescript
import { Rotating } from '@cdktf/provider-time'

new Rotating(scope: Construct, id: string, config?: RotatingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Rotating.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.Rotating.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.Rotating.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.RotatingConfig">RotatingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.Rotating.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Rotating.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.Rotating.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.RotatingConfig">RotatingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Rotating.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.Rotating.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.Rotating.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.Rotating.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.Rotating.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRfc3339">resetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationDays">resetRotationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationHours">resetRotationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationMinutes">resetRotationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationMonths">resetRotationMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationRfc3339">resetRotationRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetRotationYears">resetRotationYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.Rotating.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.Rotating.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.Rotating.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.Rotating.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.Rotating.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.Rotating.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.Rotating.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.Rotating.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.Rotating.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.Rotating.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.Rotating.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.Rotating.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.Rotating.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.Rotating.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.Rotating.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.Rotating.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.Rotating.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.Rotating.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-time.Rotating.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRfc3339` <a name="resetRfc3339" id="@cdktf/provider-time.Rotating.resetRfc3339"></a>

```typescript
public resetRfc3339(): void
```

##### `resetRotationDays` <a name="resetRotationDays" id="@cdktf/provider-time.Rotating.resetRotationDays"></a>

```typescript
public resetRotationDays(): void
```

##### `resetRotationHours` <a name="resetRotationHours" id="@cdktf/provider-time.Rotating.resetRotationHours"></a>

```typescript
public resetRotationHours(): void
```

##### `resetRotationMinutes` <a name="resetRotationMinutes" id="@cdktf/provider-time.Rotating.resetRotationMinutes"></a>

```typescript
public resetRotationMinutes(): void
```

##### `resetRotationMonths` <a name="resetRotationMonths" id="@cdktf/provider-time.Rotating.resetRotationMonths"></a>

```typescript
public resetRotationMonths(): void
```

##### `resetRotationRfc3339` <a name="resetRotationRfc3339" id="@cdktf/provider-time.Rotating.resetRotationRfc3339"></a>

```typescript
public resetRotationRfc3339(): void
```

##### `resetRotationYears` <a name="resetRotationYears" id="@cdktf/provider-time.Rotating.resetRotationYears"></a>

```typescript
public resetRotationYears(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.Rotating.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Rotating.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.Rotating.isConstruct"></a>

```typescript
import { Rotating } from '@cdktf/provider-time'

Rotating.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.Rotating.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Rotating.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.Rotating.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.unix">unix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rfc3339Input">rfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationDaysInput">rotationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationHoursInput">rotationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationMinutesInput">rotationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationMonthsInput">rotationMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationRfc3339Input">rotationRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationYearsInput">rotationYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rfc3339">rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationDays">rotationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationHours">rotationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationMinutes">rotationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationMonths">rotationMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationRfc3339">rotationRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.rotationYears">rotationYears</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Rotating.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.Rotating.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.Rotating.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.Rotating.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.Rotating.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.Rotating.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.Rotating.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.Rotating.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.Rotating.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.Rotating.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.Rotating.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.Rotating.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.Rotating.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.Rotating.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.Rotating.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.Rotating.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.Rotating.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.Rotating.property.unix"></a>

```typescript
public readonly unix: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.Rotating.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-time.Rotating.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rfc3339Input`<sup>Optional</sup> <a name="rfc3339Input" id="@cdktf/provider-time.Rotating.property.rfc3339Input"></a>

```typescript
public readonly rfc3339Input: string;
```

- *Type:* string

---

##### `rotationDaysInput`<sup>Optional</sup> <a name="rotationDaysInput" id="@cdktf/provider-time.Rotating.property.rotationDaysInput"></a>

```typescript
public readonly rotationDaysInput: number;
```

- *Type:* number

---

##### `rotationHoursInput`<sup>Optional</sup> <a name="rotationHoursInput" id="@cdktf/provider-time.Rotating.property.rotationHoursInput"></a>

```typescript
public readonly rotationHoursInput: number;
```

- *Type:* number

---

##### `rotationMinutesInput`<sup>Optional</sup> <a name="rotationMinutesInput" id="@cdktf/provider-time.Rotating.property.rotationMinutesInput"></a>

```typescript
public readonly rotationMinutesInput: number;
```

- *Type:* number

---

##### `rotationMonthsInput`<sup>Optional</sup> <a name="rotationMonthsInput" id="@cdktf/provider-time.Rotating.property.rotationMonthsInput"></a>

```typescript
public readonly rotationMonthsInput: number;
```

- *Type:* number

---

##### `rotationRfc3339Input`<sup>Optional</sup> <a name="rotationRfc3339Input" id="@cdktf/provider-time.Rotating.property.rotationRfc3339Input"></a>

```typescript
public readonly rotationRfc3339Input: string;
```

- *Type:* string

---

##### `rotationYearsInput`<sup>Optional</sup> <a name="rotationYearsInput" id="@cdktf/provider-time.Rotating.property.rotationYearsInput"></a>

```typescript
public readonly rotationYearsInput: number;
```

- *Type:* number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.Rotating.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Rotating.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.Rotating.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

---

##### `rotationDays`<sup>Required</sup> <a name="rotationDays" id="@cdktf/provider-time.Rotating.property.rotationDays"></a>

```typescript
public readonly rotationDays: number;
```

- *Type:* number

---

##### `rotationHours`<sup>Required</sup> <a name="rotationHours" id="@cdktf/provider-time.Rotating.property.rotationHours"></a>

```typescript
public readonly rotationHours: number;
```

- *Type:* number

---

##### `rotationMinutes`<sup>Required</sup> <a name="rotationMinutes" id="@cdktf/provider-time.Rotating.property.rotationMinutes"></a>

```typescript
public readonly rotationMinutes: number;
```

- *Type:* number

---

##### `rotationMonths`<sup>Required</sup> <a name="rotationMonths" id="@cdktf/provider-time.Rotating.property.rotationMonths"></a>

```typescript
public readonly rotationMonths: number;
```

- *Type:* number

---

##### `rotationRfc3339`<sup>Required</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.Rotating.property.rotationRfc3339"></a>

```typescript
public readonly rotationRfc3339: string;
```

- *Type:* string

---

##### `rotationYears`<sup>Required</sup> <a name="rotationYears" id="@cdktf/provider-time.Rotating.property.rotationYears"></a>

```typescript
public readonly rotationYears: number;
```

- *Type:* number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.Rotating.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Rotating.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.Rotating.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Sleep <a name="Sleep" id="@cdktf/provider-time.Sleep"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/sleep time_sleep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.Sleep.Initializer"></a>

```typescript
import { Sleep } from '@cdktf/provider-time'

new Sleep(scope: Construct, id: string, config?: SleepConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Sleep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.Sleep.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.Sleep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.SleepConfig">SleepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.Sleep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Sleep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.Sleep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.SleepConfig">SleepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Sleep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.Sleep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.Sleep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.Sleep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.Sleep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.resetCreateDuration">resetCreateDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.resetDestroyDuration">resetDestroyDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.Sleep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.Sleep.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.Sleep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.Sleep.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.Sleep.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.Sleep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.Sleep.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.Sleep.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.Sleep.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.Sleep.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.Sleep.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.Sleep.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.Sleep.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.Sleep.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.Sleep.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.Sleep.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.Sleep.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.Sleep.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.Sleep.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Sleep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreateDuration` <a name="resetCreateDuration" id="@cdktf/provider-time.Sleep.resetCreateDuration"></a>

```typescript
public resetCreateDuration(): void
```

##### `resetDestroyDuration` <a name="resetDestroyDuration" id="@cdktf/provider-time.Sleep.resetDestroyDuration"></a>

```typescript
public resetDestroyDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-time.Sleep.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.Sleep.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Sleep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.Sleep.isConstruct"></a>

```typescript
import { Sleep } from '@cdktf/provider-time'

Sleep.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.Sleep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Sleep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.Sleep.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.createDurationInput">createDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.destroyDurationInput">destroyDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.createDuration">createDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.destroyDuration">destroyDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Sleep.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.Sleep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.Sleep.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.Sleep.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.Sleep.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.Sleep.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.Sleep.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.Sleep.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.Sleep.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.Sleep.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.Sleep.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.Sleep.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createDurationInput`<sup>Optional</sup> <a name="createDurationInput" id="@cdktf/provider-time.Sleep.property.createDurationInput"></a>

```typescript
public readonly createDurationInput: string;
```

- *Type:* string

---

##### `destroyDurationInput`<sup>Optional</sup> <a name="destroyDurationInput" id="@cdktf/provider-time.Sleep.property.destroyDurationInput"></a>

```typescript
public readonly destroyDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-time.Sleep.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.Sleep.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createDuration`<sup>Required</sup> <a name="createDuration" id="@cdktf/provider-time.Sleep.property.createDuration"></a>

```typescript
public readonly createDuration: string;
```

- *Type:* string

---

##### `destroyDuration`<sup>Required</sup> <a name="destroyDuration" id="@cdktf/provider-time.Sleep.property.destroyDuration"></a>

```typescript
public readonly destroyDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Sleep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.Sleep.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Sleep.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.Sleep.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Static <a name="Static" id="@cdktf/provider-time.Static"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/static time_static}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.Static.Initializer"></a>

```typescript
import { Static } from '@cdktf/provider-time'

new Static(scope: Construct, id: string, config?: StaticConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Static.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.Static.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.Static.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.StaticConfig">StaticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.Static.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Static.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.Static.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.StaticConfig">StaticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Static.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.Static.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.Static.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.Static.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.Static.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.resetRfc3339">resetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.Static.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.Static.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.Static.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.Static.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.Static.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.Static.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.Static.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.Static.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.Static.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.Static.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.Static.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.Static.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.Static.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.Static.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.Static.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.Static.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.Static.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.Static.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.Static.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.Static.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-time.Static.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRfc3339` <a name="resetRfc3339" id="@cdktf/provider-time.Static.resetRfc3339"></a>

```typescript
public resetRfc3339(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.Static.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.Static.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.Static.isConstruct"></a>

```typescript
import { Static } from '@cdktf/provider-time'

Static.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.Static.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Static.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.Static.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.unix">unix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.rfc3339Input">rfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.rfc3339">rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.Static.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.Static.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.Static.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.Static.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.Static.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.Static.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.Static.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.Static.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.Static.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.Static.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.Static.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.Static.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.Static.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.Static.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.Static.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.Static.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.Static.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.Static.property.unix"></a>

```typescript
public readonly unix: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.Static.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-time.Static.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rfc3339Input`<sup>Optional</sup> <a name="rfc3339Input" id="@cdktf/provider-time.Static.property.rfc3339Input"></a>

```typescript
public readonly rfc3339Input: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.Static.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.Static.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.Static.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.Static.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.Static.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.Static.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### TimeProvider <a name="TimeProvider" id="@cdktf/provider-time.TimeProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/time time}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.TimeProvider.Initializer"></a>

```typescript
import { TimeProvider } from '@cdktf/provider-time'

new TimeProvider(scope: Construct, id: string, config?: TimeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.TimeProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.TimeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.TimeProviderConfig">TimeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.TimeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.TimeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.TimeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.TimeProviderConfig">TimeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.TimeProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.TimeProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.TimeProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.TimeProvider.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.TimeProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.TimeProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.TimeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.TimeProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.TimeProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.TimeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.TimeProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.TimeProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.TimeProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-time.TimeProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.TimeProvider.isConstruct"></a>

```typescript
import { TimeProvider } from '@cdktf/provider-time'

TimeProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.TimeProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.TimeProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.TimeProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.TimeProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.TimeProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-time.TimeProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.TimeProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.TimeProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-time.TimeProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-time.TimeProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-time.TimeProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.TimeProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.OffsetConfig.Initializer"></a>

```typescript
import { OffsetConfig } from '@cdktf/provider-time'

const offsetConfig: OffsetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.baseRfc3339">baseRfc3339</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#base_rfc3339 Offset#base_rfc3339}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#id Offset#id}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetDays">offsetDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_days Offset#offset_days}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetHours">offsetHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_hours Offset#offset_hours}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetMinutes">offsetMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_minutes Offset#offset_minutes}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetMonths">offsetMonths</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_months Offset#offset_months}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_seconds Offset#offset_seconds}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.offsetYears">offsetYears</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_years Offset#offset_years}. |
| <code><a href="#@cdktf/provider-time.OffsetConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#triggers Offset#triggers}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.OffsetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.OffsetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.OffsetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.OffsetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baseRfc3339`<sup>Optional</sup> <a name="baseRfc3339" id="@cdktf/provider-time.OffsetConfig.property.baseRfc3339"></a>

```typescript
public readonly baseRfc3339: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#base_rfc3339 Offset#base_rfc3339}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-time.OffsetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#id Offset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offsetDays`<sup>Optional</sup> <a name="offsetDays" id="@cdktf/provider-time.OffsetConfig.property.offsetDays"></a>

```typescript
public readonly offsetDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_days Offset#offset_days}.

---

##### `offsetHours`<sup>Optional</sup> <a name="offsetHours" id="@cdktf/provider-time.OffsetConfig.property.offsetHours"></a>

```typescript
public readonly offsetHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_hours Offset#offset_hours}.

---

##### `offsetMinutes`<sup>Optional</sup> <a name="offsetMinutes" id="@cdktf/provider-time.OffsetConfig.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_minutes Offset#offset_minutes}.

---

##### `offsetMonths`<sup>Optional</sup> <a name="offsetMonths" id="@cdktf/provider-time.OffsetConfig.property.offsetMonths"></a>

```typescript
public readonly offsetMonths: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_months Offset#offset_months}.

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="@cdktf/provider-time.OffsetConfig.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_seconds Offset#offset_seconds}.

---

##### `offsetYears`<sup>Optional</sup> <a name="offsetYears" id="@cdktf/provider-time.OffsetConfig.property.offsetYears"></a>

```typescript
public readonly offsetYears: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_years Offset#offset_years}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.OffsetConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#triggers Offset#triggers}.

---

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.RotatingConfig.Initializer"></a>

```typescript
import { RotatingConfig } from '@cdktf/provider-time'

const rotatingConfig: RotatingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#id Rotating#id}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rfc3339">rfc3339</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rfc3339 Rotating#rfc3339}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationDays">rotationDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_days Rotating#rotation_days}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationHours">rotationHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_hours Rotating#rotation_hours}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationMinutes">rotationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_minutes Rotating#rotation_minutes}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationMonths">rotationMonths</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_months Rotating#rotation_months}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationRfc3339">rotationRfc3339</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.rotationYears">rotationYears</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_years Rotating#rotation_years}. |
| <code><a href="#@cdktf/provider-time.RotatingConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#triggers Rotating#triggers}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.RotatingConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.RotatingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.RotatingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.RotatingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-time.RotatingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#id Rotating#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.RotatingConfig.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rfc3339 Rotating#rfc3339}.

---

##### `rotationDays`<sup>Optional</sup> <a name="rotationDays" id="@cdktf/provider-time.RotatingConfig.property.rotationDays"></a>

```typescript
public readonly rotationDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_days Rotating#rotation_days}.

---

##### `rotationHours`<sup>Optional</sup> <a name="rotationHours" id="@cdktf/provider-time.RotatingConfig.property.rotationHours"></a>

```typescript
public readonly rotationHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_hours Rotating#rotation_hours}.

---

##### `rotationMinutes`<sup>Optional</sup> <a name="rotationMinutes" id="@cdktf/provider-time.RotatingConfig.property.rotationMinutes"></a>

```typescript
public readonly rotationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_minutes Rotating#rotation_minutes}.

---

##### `rotationMonths`<sup>Optional</sup> <a name="rotationMonths" id="@cdktf/provider-time.RotatingConfig.property.rotationMonths"></a>

```typescript
public readonly rotationMonths: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_months Rotating#rotation_months}.

---

##### `rotationRfc3339`<sup>Optional</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.RotatingConfig.property.rotationRfc3339"></a>

```typescript
public readonly rotationRfc3339: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}.

---

##### `rotationYears`<sup>Optional</sup> <a name="rotationYears" id="@cdktf/provider-time.RotatingConfig.property.rotationYears"></a>

```typescript
public readonly rotationYears: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_years Rotating#rotation_years}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.RotatingConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#triggers Rotating#triggers}.

---

### SleepConfig <a name="SleepConfig" id="@cdktf/provider-time.SleepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.SleepConfig.Initializer"></a>

```typescript
import { SleepConfig } from '@cdktf/provider-time'

const sleepConfig: SleepConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.createDuration">createDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}. |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.destroyDuration">destroyDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}. |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#id Sleep#id}. |
| <code><a href="#@cdktf/provider-time.SleepConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.SleepConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.SleepConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.SleepConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.SleepConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createDuration`<sup>Optional</sup> <a name="createDuration" id="@cdktf/provider-time.SleepConfig.property.createDuration"></a>

```typescript
public readonly createDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}.

---

##### `destroyDuration`<sup>Optional</sup> <a name="destroyDuration" id="@cdktf/provider-time.SleepConfig.property.destroyDuration"></a>

```typescript
public readonly destroyDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-time.SleepConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#id Sleep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.SleepConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}.

---

### StaticConfig <a name="StaticConfig" id="@cdktf/provider-time.StaticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.StaticConfig.Initializer"></a>

```typescript
import { StaticConfig } from '@cdktf/provider-time'

const staticConfig: StaticConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#id Static#id}. |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.rfc3339">rfc3339</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#rfc3339 Static#rfc3339}. |
| <code><a href="#@cdktf/provider-time.StaticConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#triggers Static#triggers}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.StaticConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.StaticConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.StaticConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.StaticConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-time.StaticConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#id Static#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.StaticConfig.property.rfc3339"></a>

```typescript
public readonly rfc3339: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#rfc3339 Static#rfc3339}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.StaticConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#triggers Static#triggers}.

---

### TimeProviderConfig <a name="TimeProviderConfig" id="@cdktf/provider-time.TimeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.TimeProviderConfig.Initializer"></a>

```typescript
import { TimeProviderConfig } from '@cdktf/provider-time'

const timeProviderConfig: TimeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.TimeProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-time.TimeProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time#alias TimeProvider#alias}

---



