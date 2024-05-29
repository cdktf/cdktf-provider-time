# `offset` Submodule <a name="`offset` Submodule" id="@cdktf/provider-time.offset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.offset.Offset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.offset.Offset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new Offset(Construct Scope, string Id, OffsetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.offset.Offset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.offset.Offset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetBaseRfc3339">ResetBaseRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetDays">ResetOffsetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetHours">ResetOffsetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMinutes">ResetOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMonths">ResetOffsetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetSeconds">ResetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetYears">ResetOffsetYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-time.offset.Offset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-time.offset.Offset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-time.offset.Offset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-time.offset.Offset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-time.offset.Offset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-time.offset.Offset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-time.offset.Offset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-time.offset.Offset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-time.offset.Offset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-time.offset.Offset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-time.offset.Offset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBaseRfc3339` <a name="ResetBaseRfc3339" id="@cdktf/provider-time.offset.Offset.resetBaseRfc3339"></a>

```csharp
private void ResetBaseRfc3339()
```

##### `ResetOffsetDays` <a name="ResetOffsetDays" id="@cdktf/provider-time.offset.Offset.resetOffsetDays"></a>

```csharp
private void ResetOffsetDays()
```

##### `ResetOffsetHours` <a name="ResetOffsetHours" id="@cdktf/provider-time.offset.Offset.resetOffsetHours"></a>

```csharp
private void ResetOffsetHours()
```

##### `ResetOffsetMinutes` <a name="ResetOffsetMinutes" id="@cdktf/provider-time.offset.Offset.resetOffsetMinutes"></a>

```csharp
private void ResetOffsetMinutes()
```

##### `ResetOffsetMonths` <a name="ResetOffsetMonths" id="@cdktf/provider-time.offset.Offset.resetOffsetMonths"></a>

```csharp
private void ResetOffsetMonths()
```

##### `ResetOffsetSeconds` <a name="ResetOffsetSeconds" id="@cdktf/provider-time.offset.Offset.resetOffsetSeconds"></a>

```csharp
private void ResetOffsetSeconds()
```

##### `ResetOffsetYears` <a name="ResetOffsetYears" id="@cdktf/provider-time.offset.Offset.resetOffsetYears"></a>

```csharp
private void ResetOffsetYears()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-time.offset.Offset.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-time.offset.Offset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Offset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.offset.Offset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-time.offset.Offset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Offset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.offset.Offset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-time.offset.Offset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Offset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.offset.Offset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-time.offset.Offset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Offset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Offset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Offset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Offset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.rfc3339">Rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.second">Second</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.unix">Unix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339Input">BaseRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDaysInput">OffsetDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHoursInput">OffsetHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutesInput">OffsetMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonthsInput">OffsetMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSecondsInput">OffsetSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYearsInput">OffsetYearsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339">BaseRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDays">OffsetDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHours">OffsetHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutes">OffsetMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonths">OffsetMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSeconds">OffsetSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYears">OffsetYears</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-time.offset.Offset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-time.offset.Offset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-time.offset.Offset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-time.offset.Offset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-time.offset.Offset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-time.offset.Offset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.offset.Offset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.offset.Offset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.offset.Offset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.offset.Offset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.offset.Offset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.Offset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.offset.Offset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-time.offset.Offset.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-time.offset.Offset.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-time.offset.Offset.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-time.offset.Offset.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Rfc3339`<sup>Required</sup> <a name="Rfc3339" id="@cdktf/provider-time.offset.Offset.property.rfc3339"></a>

```csharp
public string Rfc3339 { get; }
```

- *Type:* string

---

##### `Second`<sup>Required</sup> <a name="Second" id="@cdktf/provider-time.offset.Offset.property.second"></a>

```csharp
public double Second { get; }
```

- *Type:* double

---

##### `Unix`<sup>Required</sup> <a name="Unix" id="@cdktf/provider-time.offset.Offset.property.unix"></a>

```csharp
public double Unix { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-time.offset.Offset.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `BaseRfc3339Input`<sup>Optional</sup> <a name="BaseRfc3339Input" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339Input"></a>

```csharp
public string BaseRfc3339Input { get; }
```

- *Type:* string

---

##### `OffsetDaysInput`<sup>Optional</sup> <a name="OffsetDaysInput" id="@cdktf/provider-time.offset.Offset.property.offsetDaysInput"></a>

```csharp
public double OffsetDaysInput { get; }
```

- *Type:* double

---

##### `OffsetHoursInput`<sup>Optional</sup> <a name="OffsetHoursInput" id="@cdktf/provider-time.offset.Offset.property.offsetHoursInput"></a>

```csharp
public double OffsetHoursInput { get; }
```

- *Type:* double

---

##### `OffsetMinutesInput`<sup>Optional</sup> <a name="OffsetMinutesInput" id="@cdktf/provider-time.offset.Offset.property.offsetMinutesInput"></a>

```csharp
public double OffsetMinutesInput { get; }
```

- *Type:* double

---

##### `OffsetMonthsInput`<sup>Optional</sup> <a name="OffsetMonthsInput" id="@cdktf/provider-time.offset.Offset.property.offsetMonthsInput"></a>

```csharp
public double OffsetMonthsInput { get; }
```

- *Type:* double

---

##### `OffsetSecondsInput`<sup>Optional</sup> <a name="OffsetSecondsInput" id="@cdktf/provider-time.offset.Offset.property.offsetSecondsInput"></a>

```csharp
public double OffsetSecondsInput { get; }
```

- *Type:* double

---

##### `OffsetYearsInput`<sup>Optional</sup> <a name="OffsetYearsInput" id="@cdktf/provider-time.offset.Offset.property.offsetYearsInput"></a>

```csharp
public double OffsetYearsInput { get; }
```

- *Type:* double

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-time.offset.Offset.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BaseRfc3339`<sup>Required</sup> <a name="BaseRfc3339" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339"></a>

```csharp
public string BaseRfc3339 { get; }
```

- *Type:* string

---

##### `OffsetDays`<sup>Required</sup> <a name="OffsetDays" id="@cdktf/provider-time.offset.Offset.property.offsetDays"></a>

```csharp
public double OffsetDays { get; }
```

- *Type:* double

---

##### `OffsetHours`<sup>Required</sup> <a name="OffsetHours" id="@cdktf/provider-time.offset.Offset.property.offsetHours"></a>

```csharp
public double OffsetHours { get; }
```

- *Type:* double

---

##### `OffsetMinutes`<sup>Required</sup> <a name="OffsetMinutes" id="@cdktf/provider-time.offset.Offset.property.offsetMinutes"></a>

```csharp
public double OffsetMinutes { get; }
```

- *Type:* double

---

##### `OffsetMonths`<sup>Required</sup> <a name="OffsetMonths" id="@cdktf/provider-time.offset.Offset.property.offsetMonths"></a>

```csharp
public double OffsetMonths { get; }
```

- *Type:* double

---

##### `OffsetSeconds`<sup>Required</sup> <a name="OffsetSeconds" id="@cdktf/provider-time.offset.Offset.property.offsetSeconds"></a>

```csharp
public double OffsetSeconds { get; }
```

- *Type:* double

---

##### `OffsetYears`<sup>Required</sup> <a name="OffsetYears" id="@cdktf/provider-time.offset.Offset.property.offsetYears"></a>

```csharp
public double OffsetYears { get; }
```

- *Type:* double

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-time.offset.Offset.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-time.offset.Offset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.offset.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.offset.OffsetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new OffsetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseRfc3339 = null,
    double OffsetDays = null,
    double OffsetHours = null,
    double OffsetMinutes = null,
    double OffsetMonths = null,
    double OffsetSeconds = null,
    double OffsetYears = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339">BaseRfc3339</a></code> | <code>string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetDays">OffsetDays</a></code> | <code>double</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetHours">OffsetHours</a></code> | <code>double</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes">OffsetMinutes</a></code> | <code>double</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths">OffsetMonths</a></code> | <code>double</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds">OffsetSeconds</a></code> | <code>double</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetYears">OffsetYears</a></code> | <code>double</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.offset.OffsetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.offset.OffsetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.offset.OffsetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.offset.OffsetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.offset.OffsetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.OffsetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.offset.OffsetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseRfc3339`<sup>Optional</sup> <a name="BaseRfc3339" id="@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339"></a>

```csharp
public string BaseRfc3339 { get; set; }
```

- *Type:* string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `OffsetDays`<sup>Optional</sup> <a name="OffsetDays" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetDays"></a>

```csharp
public double OffsetDays { get; set; }
```

- *Type:* double

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_days Offset#offset_days}

---

##### `OffsetHours`<sup>Optional</sup> <a name="OffsetHours" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetHours"></a>

```csharp
public double OffsetHours { get; set; }
```

- *Type:* double

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_hours Offset#offset_hours}

---

##### `OffsetMinutes`<sup>Optional</sup> <a name="OffsetMinutes" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes"></a>

```csharp
public double OffsetMinutes { get; set; }
```

- *Type:* double

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_minutes Offset#offset_minutes}

---

##### `OffsetMonths`<sup>Optional</sup> <a name="OffsetMonths" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths"></a>

```csharp
public double OffsetMonths { get; set; }
```

- *Type:* double

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_months Offset#offset_months}

---

##### `OffsetSeconds`<sup>Optional</sup> <a name="OffsetSeconds" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds"></a>

```csharp
public double OffsetSeconds { get; set; }
```

- *Type:* double

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_seconds Offset#offset_seconds}

---

##### `OffsetYears`<sup>Optional</sup> <a name="OffsetYears" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetYears"></a>

```csharp
public double OffsetYears { get; set; }
```

- *Type:* double

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#offset_years Offset#offset_years}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-time.offset.OffsetConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.2/docs/resources/offset#triggers Offset#triggers}

---



