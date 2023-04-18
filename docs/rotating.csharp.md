# `time_rotating`

Refer to the Terraform Registory for docs: [`time_rotating`](https://www.terraform.io/docs/providers/time/r/rotating).

# `rotating` Submodule <a name="`rotating` Submodule" id="@cdktf/provider-time.rotating"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Rotating <a name="Rotating" id="@cdktf/provider-time.rotating.Rotating"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.rotating.Rotating.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new Rotating(Construct Scope, string Id, RotatingConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRfc3339">ResetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationDays">ResetRotationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationHours">ResetRotationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMinutes">ResetRotationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMonths">ResetRotationMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339">ResetRotationRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationYears">ResetRotationYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-time.rotating.Rotating.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-time.rotating.Rotating.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-time.rotating.Rotating.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-time.rotating.Rotating.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRfc3339` <a name="ResetRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRfc3339"></a>

```csharp
private void ResetRfc3339()
```

##### `ResetRotationDays` <a name="ResetRotationDays" id="@cdktf/provider-time.rotating.Rotating.resetRotationDays"></a>

```csharp
private void ResetRotationDays()
```

##### `ResetRotationHours` <a name="ResetRotationHours" id="@cdktf/provider-time.rotating.Rotating.resetRotationHours"></a>

```csharp
private void ResetRotationHours()
```

##### `ResetRotationMinutes` <a name="ResetRotationMinutes" id="@cdktf/provider-time.rotating.Rotating.resetRotationMinutes"></a>

```csharp
private void ResetRotationMinutes()
```

##### `ResetRotationMonths` <a name="ResetRotationMonths" id="@cdktf/provider-time.rotating.Rotating.resetRotationMonths"></a>

```csharp
private void ResetRotationMonths()
```

##### `ResetRotationRfc3339` <a name="ResetRotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339"></a>

```csharp
private void ResetRotationRfc3339()
```

##### `ResetRotationYears` <a name="ResetRotationYears" id="@cdktf/provider-time.rotating.Rotating.resetRotationYears"></a>

```csharp
private void ResetRotationYears()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-time.rotating.Rotating.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-time.rotating.Rotating.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Rotating.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.rotating.Rotating.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Rotating.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Rotating.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.second">Second</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.unix">Unix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339Input">Rfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput">RotationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput">RotationHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput">RotationMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput">RotationMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input">RotationRfc3339Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput">RotationYearsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339">Rfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDays">RotationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHours">RotationHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutes">RotationMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonths">RotationMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339">RotationRfc3339</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYears">RotationYears</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-time.rotating.Rotating.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-time.rotating.Rotating.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-time.rotating.Rotating.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-time.rotating.Rotating.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.rotating.Rotating.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.rotating.Rotating.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.rotating.Rotating.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.rotating.Rotating.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.rotating.Rotating.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.rotating.Rotating.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.rotating.Rotating.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-time.rotating.Rotating.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-time.rotating.Rotating.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.rotating.Rotating.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-time.rotating.Rotating.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-time.rotating.Rotating.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Second`<sup>Required</sup> <a name="Second" id="@cdktf/provider-time.rotating.Rotating.property.second"></a>

```csharp
public double Second { get; }
```

- *Type:* double

---

##### `Unix`<sup>Required</sup> <a name="Unix" id="@cdktf/provider-time.rotating.Rotating.property.unix"></a>

```csharp
public double Unix { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-time.rotating.Rotating.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `Rfc3339Input`<sup>Optional</sup> <a name="Rfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339Input"></a>

```csharp
public string Rfc3339Input { get; }
```

- *Type:* string

---

##### `RotationDaysInput`<sup>Optional</sup> <a name="RotationDaysInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput"></a>

```csharp
public double RotationDaysInput { get; }
```

- *Type:* double

---

##### `RotationHoursInput`<sup>Optional</sup> <a name="RotationHoursInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput"></a>

```csharp
public double RotationHoursInput { get; }
```

- *Type:* double

---

##### `RotationMinutesInput`<sup>Optional</sup> <a name="RotationMinutesInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput"></a>

```csharp
public double RotationMinutesInput { get; }
```

- *Type:* double

---

##### `RotationMonthsInput`<sup>Optional</sup> <a name="RotationMonthsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput"></a>

```csharp
public double RotationMonthsInput { get; }
```

- *Type:* double

---

##### `RotationRfc3339Input`<sup>Optional</sup> <a name="RotationRfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input"></a>

```csharp
public string RotationRfc3339Input { get; }
```

- *Type:* string

---

##### `RotationYearsInput`<sup>Optional</sup> <a name="RotationYearsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput"></a>

```csharp
public double RotationYearsInput { get; }
```

- *Type:* double

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-time.rotating.Rotating.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Rfc3339`<sup>Required</sup> <a name="Rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339"></a>

```csharp
public string Rfc3339 { get; }
```

- *Type:* string

---

##### `RotationDays`<sup>Required</sup> <a name="RotationDays" id="@cdktf/provider-time.rotating.Rotating.property.rotationDays"></a>

```csharp
public double RotationDays { get; }
```

- *Type:* double

---

##### `RotationHours`<sup>Required</sup> <a name="RotationHours" id="@cdktf/provider-time.rotating.Rotating.property.rotationHours"></a>

```csharp
public double RotationHours { get; }
```

- *Type:* double

---

##### `RotationMinutes`<sup>Required</sup> <a name="RotationMinutes" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutes"></a>

```csharp
public double RotationMinutes { get; }
```

- *Type:* double

---

##### `RotationMonths`<sup>Required</sup> <a name="RotationMonths" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonths"></a>

```csharp
public double RotationMonths { get; }
```

- *Type:* double

---

##### `RotationRfc3339`<sup>Required</sup> <a name="RotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339"></a>

```csharp
public string RotationRfc3339 { get; }
```

- *Type:* string

---

##### `RotationYears`<sup>Required</sup> <a name="RotationYears" id="@cdktf/provider-time.rotating.Rotating.property.rotationYears"></a>

```csharp
public double RotationYears { get; }
```

- *Type:* double

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-time.rotating.Rotating.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-time.rotating.Rotating.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.rotating.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.rotating.RotatingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new RotatingConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Rfc3339 = null,
    double RotationDays = null,
    double RotationHours = null,
    double RotationMinutes = null,
    double RotationMonths = null,
    string RotationRfc3339 = null,
    double RotationYears = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339">Rfc3339</a></code> | <code>string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays">RotationDays</a></code> | <code>double</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours">RotationHours</a></code> | <code>double</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes">RotationMinutes</a></code> | <code>double</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths">RotationMonths</a></code> | <code>double</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339">RotationRfc3339</a></code> | <code>string</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears">RotationYears</a></code> | <code>double</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.rotating.RotatingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.rotating.RotatingConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.rotating.RotatingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.rotating.RotatingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.rotating.RotatingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Rfc3339`<sup>Optional</sup> <a name="Rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339"></a>

```csharp
public string Rfc3339 { get; set; }
```

- *Type:* string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rfc3339 Rotating#rfc3339}

---

##### `RotationDays`<sup>Optional</sup> <a name="RotationDays" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays"></a>

```csharp
public double RotationDays { get; set; }
```

- *Type:* double

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_days Rotating#rotation_days}

---

##### `RotationHours`<sup>Optional</sup> <a name="RotationHours" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours"></a>

```csharp
public double RotationHours { get; set; }
```

- *Type:* double

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_hours Rotating#rotation_hours}

---

##### `RotationMinutes`<sup>Optional</sup> <a name="RotationMinutes" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes"></a>

```csharp
public double RotationMinutes { get; set; }
```

- *Type:* double

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `RotationMonths`<sup>Optional</sup> <a name="RotationMonths" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths"></a>

```csharp
public double RotationMonths { get; set; }
```

- *Type:* double

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_months Rotating#rotation_months}

---

##### `RotationRfc3339`<sup>Optional</sup> <a name="RotationRfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339"></a>

```csharp
public string RotationRfc3339 { get; set; }
```

- *Type:* string

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `RotationYears`<sup>Optional</sup> <a name="RotationYears" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears"></a>

```csharp
public double RotationYears { get; set; }
```

- *Type:* double

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_years Rotating#rotation_years}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-time.rotating.RotatingConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#triggers Rotating#triggers}

---



