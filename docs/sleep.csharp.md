# `sleep` Submodule <a name="`sleep` Submodule" id="@cdktf/provider-time.sleep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sleep <a name="Sleep" id="@cdktf/provider-time.sleep.Sleep"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/sleep time_sleep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.sleep.Sleep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new Sleep(Construct Scope, string Id, SleepConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-time.sleep.SleepConfig">SleepConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.sleep.SleepConfig">SleepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetCreateDuration">ResetCreateDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetDestroyDuration">ResetDestroyDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-time.sleep.Sleep.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-time.sleep.Sleep.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-time.sleep.Sleep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-time.sleep.Sleep.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-time.sleep.Sleep.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-time.sleep.Sleep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-time.sleep.Sleep.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-time.sleep.Sleep.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-time.sleep.Sleep.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-time.sleep.Sleep.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-time.sleep.Sleep.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-time.sleep.Sleep.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-time.sleep.Sleep.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-time.sleep.Sleep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCreateDuration` <a name="ResetCreateDuration" id="@cdktf/provider-time.sleep.Sleep.resetCreateDuration"></a>

```csharp
private void ResetCreateDuration()
```

##### `ResetDestroyDuration` <a name="ResetDestroyDuration" id="@cdktf/provider-time.sleep.Sleep.resetDestroyDuration"></a>

```csharp
private void ResetDestroyDuration()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-time.sleep.Sleep.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-time.sleep.Sleep.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Sleep.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.sleep.Sleep.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-time.sleep.Sleep.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Sleep.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.sleep.Sleep.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-time.sleep.Sleep.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

Sleep.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-time.sleep.Sleep.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.createDurationInput">CreateDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.destroyDurationInput">DestroyDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.createDuration">CreateDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.destroyDuration">DestroyDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-time.sleep.Sleep.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-time.sleep.Sleep.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-time.sleep.Sleep.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-time.sleep.Sleep.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-time.sleep.Sleep.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-time.sleep.Sleep.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-time.sleep.Sleep.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.sleep.Sleep.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.sleep.Sleep.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.sleep.Sleep.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.sleep.Sleep.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.sleep.Sleep.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.sleep.Sleep.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.sleep.Sleep.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.sleep.Sleep.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CreateDurationInput`<sup>Optional</sup> <a name="CreateDurationInput" id="@cdktf/provider-time.sleep.Sleep.property.createDurationInput"></a>

```csharp
public string CreateDurationInput { get; }
```

- *Type:* string

---

##### `DestroyDurationInput`<sup>Optional</sup> <a name="DestroyDurationInput" id="@cdktf/provider-time.sleep.Sleep.property.destroyDurationInput"></a>

```csharp
public string DestroyDurationInput { get; }
```

- *Type:* string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-time.sleep.Sleep.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateDuration`<sup>Required</sup> <a name="CreateDuration" id="@cdktf/provider-time.sleep.Sleep.property.createDuration"></a>

```csharp
public string CreateDuration { get; }
```

- *Type:* string

---

##### `DestroyDuration`<sup>Required</sup> <a name="DestroyDuration" id="@cdktf/provider-time.sleep.Sleep.property.destroyDuration"></a>

```csharp
public string DestroyDuration { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-time.sleep.Sleep.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-time.sleep.Sleep.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SleepConfig <a name="SleepConfig" id="@cdktf/provider-time.sleep.SleepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.sleep.SleepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Time;

new SleepConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CreateDuration = null,
    string DestroyDuration = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.createDuration">CreateDuration</a></code> | <code>string</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.destroyDuration">DestroyDuration</a></code> | <code>string</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect. |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | (Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.sleep.SleepConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.sleep.SleepConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.sleep.SleepConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.sleep.SleepConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.sleep.SleepConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.sleep.SleepConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.sleep.SleepConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CreateDuration`<sup>Optional</sup> <a name="CreateDuration" id="@cdktf/provider-time.sleep.SleepConfig.property.createDuration"></a>

```csharp
public string CreateDuration { get; set; }
```

- *Type:* string

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}

---

##### `DestroyDuration`<sup>Optional</sup> <a name="DestroyDuration" id="@cdktf/provider-time.sleep.SleepConfig.property.destroyDuration"></a>

```csharp
public string DestroyDuration { get; set; }
```

- *Type:* string

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-time.sleep.SleepConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

(Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}

---



