## API Updates (1.3.6)

An NPCBuilder class has been implemented. Use this class to create an NPCData object with all the custom modifications already applied. To spawn an NPC using the API, create an NPC using the NPCBuilder class then run:

```
NPCManagerAPI.spawnNPC(data);
```

Example:

```
NPCData data = new NPCBuilder("test", new Location(Bukkit.getWorld("test"), 0, 70, 0))
.doNotStore()
.removeHeadRotation()
.setRange(20)
.setHelmet(new ItemStack(Material.DIAMOND_HELMET))
.create();
NPCManagerAPI.spawnNPC(data);
```